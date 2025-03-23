import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User, AuthPayload } from './interfaces';

const app = express();
app.use(express.json());

const users: User[] = [];
const SECRET_KEY = 'your_secret_key';

const generateToken = (userId: string): string => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: '1h' });
  };

  const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
  
    try {
      const decoded = jwt.verify(token, SECRET_KEY) as AuthPayload;
      req.user = { id: decoded.userId };
      next();
    } catch {
      res.status(401).json({ message: 'Invalid token' });
    }
  };

  app.post('/api/auth/register', async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = { id: Date.now().toString(), username, password: hashedPassword };
    users.push(newUser);
  
    res.status(201).json({ message: 'User registered' });
  });

  app.post('/api/auth/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
  
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    const token = generateToken(user.id);
    res.json({ token });
  });

  