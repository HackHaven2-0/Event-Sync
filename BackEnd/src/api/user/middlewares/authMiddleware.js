import jwt from 'jsonwebtoken';
import User from '../../../model/userModel.js';

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

const organizerMiddleware = (req, res, next) => {
  if (req.user.role !== 'organizer') {
    return res.status(403).json({ message: 'Access denied. Organizers only.' });
  }
  next();
};

export { authMiddleware, organizerMiddleware };