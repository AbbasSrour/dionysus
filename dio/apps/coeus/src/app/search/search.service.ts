import {
  DeleteResponse,
  IndexResponse,
  SearchResponse,
} from '@elastic/elasticsearch/lib/api/types';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { query } from 'express';
import { catchError } from 'rxjs';

@Injectable()
export class SearchService {
  constructor(
    private readonly ElasticClient: ElasticsearchService,
    private readonly logger: Logger
  ) {}

  async searchElastic(
    index: string,
    query: string
  ): Promise<SearchResponse | null> {
    try {
      return await this.ElasticClient.search({
        index,
        query: {
          match: { searchTerm: query },
        },
      });
    } catch (error) {
      console.log({
        message: `error searching for index: ${index} and query: ${query}`,
        error,
      });
      return null;
    }
  }

  async indexElastic(
    index: string,
    document: object
  ): Promise<IndexResponse | null> {
    try {
      return await this.ElasticClient.index({
        index,
        document,
      });
    } catch (error) {
      console.log({ message: 'error creating the index', error });
      return null;
    }
  }

  async existsElastic(index: string, id: string): Promise<boolean> {
    try {
      return await this.ElasticClient.exists({ index, id });
    } catch (error) {
      console.log({ message: 'error checking if the index exists', error });
      throw new InternalServerErrorException();
    }
  }

  async deleteDocumentElastic(
    index: string,
    id: string
  ): Promise<DeleteResponse> {
    try {
      return await this.ElasticClient.delete({
        index,
        id,
      });
    } catch (error) {
      console.log({ message: 'error deleting the index', error });
      throw new InternalServerErrorException();
    }
  }
}
