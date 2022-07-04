# Dionysus: Backend

## Description:
Dionysus is a free Movie and TV-Serieses streaming website, with all the features expected from modren streaming services
mainly user accounts that hold user watch history, recommendation system based on this history and a slick UI.

This repository holds the backend side of the website powered by NodeJS, Express and PostgreSQL.

## Todo:

### Database
- [x] ER Diagram
- [x] Relation Data Model
- [x] Normalization
- [ ] Database Processes For Checks:
  - [ ] Process To Check The Email
  - [ ] Process to Check The Username
  - [ ] Process To Check The Password
- [ ] Database Triggers For Data Integrity:
  - [x] Make emails Lower Case
  - [ ] Correct Email Fortmat
  - [ ] Unify Lower Case Email And Email Format Trigger
  - [ ] An episode can have the season id of a different series
  - [ ] Episode Default Wallpaper: If Episode Wallpaper is null it takes season wallpaper if it exists if not takes series wallpaper
  - [ ] Season Takes The Default Wallpaper Of Series If Null
- [ ] User Intrests
- [ ] User Recomendation System
- [ ] Since History is unique, you need to update the watch time and date when a user rewatches the same thing
 
### Backend
- [ ] Routes
- [ ] Crawler That Automatically Adds Data From Searches
- [ ] User Intrests
- [ ] User Recomendation System


