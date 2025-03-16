import 'express';
import e from 'express';

declare module 'express' {
  interface  Request {
    timestamp?: number;
  }
}