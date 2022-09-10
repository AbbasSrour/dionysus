import {
  CallHandler,
  ConflictException,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class PrismaConflictInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error: any) => {
        if (
          (error.statusCode =
            'P2002' && error instanceof PrismaClientKnownRequestError)
        ) {
          throw new ConflictException();
        } else {
          throw error;
        }
      })
    );
  }
}
