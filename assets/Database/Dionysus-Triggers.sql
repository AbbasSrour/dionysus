---------------------------------------------------------------------------------------------------------------
--------------------------------------------- Triggers --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------

-- Make Sure An Episode Doesn't have a season_id of another series: CREATE
--CREATE OR REPLACE FUNCTION dionysus.episode_season_series_check()
    --RETURNS TRIGGER
  --  LANGUAGE ;
--CREATE TRIGGER check_episode_series_season
    --BEFORE INSERT ON dionysus.episode;

-- Change Episode Wallpaper Based On season and series wallpaper
CREATE OR REPLACE FUNCTION dionysus.change_wallpaper()
    RETURNS trigger
    LANGUAGE plpgsql
AS $$
    declare myvar varchar(480);
BEGIN
    IF NEW.episode_wallpaper is null
    Then
        myvar = (SELECT distinct dionysus.season.season_wallpaper
                 From dionysus.season
                 WHERE NEW.season_id = dionysus.season.season_id);
        IF myvar is not null
        THEN
            UPDATE dionysus.episode
            SET episode_wallpaper = dionysus.season.season_wallpaper
            From dionysus.season
            WHERE NEW.season_id = dionysus.season.season_id;
        ELSE
            UPDATE dionysus.episode
            SET episode_wallpaper = dionysus.series.series_wallpaper
            From dionysus.series
            WHERE NEW.series_id = dionysus.series.series_id;
        End if;
    End if;
    RETURN null;
End;
$$;
CREATE TRIGGER change_wallpaper_trigger
    AFTER INSERT OR UPDATE ON dionysus.episode
    FOR EACH ROW 
    EXECUTE FUNCTION dionysus.change_wallpaper();

-- Trigger To Make Emails inserted lowercase
CREATE OR REPLACE FUNCTION dionysus.change_email_lowercase()
    RETURNS TRIGGER
    LANGUAGE plpgsql
    AS
    $$
    BEGIN
        NEW.user_email = lower(NEW.user_email);
        RETURN NEW;
    END;
    $$;

CREATE TRIGGER change_email_lowercase_trigger
    BEFORE INSERT OR UPDATE ON dionysus.users
    FOR EACH ROW
    EXECUTE FUNCTION  dionysus.change_email_lowercase();

-- Delete Duplicate Seasons
 CREATE OR REPLACE FUNCTION dionysus.delete_season_duplicates()
     RETURNS TRIGGER
     LANGUAGE plpgsql
     AS
     $$
     BEGIN
     DELETE FROM dionysus.season
         WHERE season_id IN ( SELECT season_id
             FROM (SELECT season_id, ROW_NUMBER() OVER
         ( PARTITION BY series_id, season_number ORDER BY season_id ) AS row_num
           FROM dionysus.season) as t WHERE t.row_num>1);
     RETURN NULL;
     END;
     $$;
 CREATE TRIGGER delete_season_duplicates_trigger
     AFTER INSERT OR UPDATE ON dionysus.season
     FOR EACH ROW
     EXECUTE FUNCTION dionysus.delete_season_duplicates();

-- Email Syntax Check
CREATE OR REPLACE FUNCTION dionysus.validate_email()
    RETURNS TRIGGER
    AS
    $$
    BEGIN
        IF NEW.user_email !~* '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
        THEN
           RAISE EXCEPTION 'Invalid Email Address' USING
            errcode='BULLS',
            message='Bar is prohibited',
            hint='We do not talk to this guy';
        ELSE
            RETURN NEW;
        END if;
    END;
    $$ LANGUAGE plpgsql;

CREATE TRIGGER validate_email_trigger
    BEFORE INSERT OR UPDATE ON dionysus.users
    FOR EACH ROW
    EXECUTE FUNCTION dionysus.validate_email();
