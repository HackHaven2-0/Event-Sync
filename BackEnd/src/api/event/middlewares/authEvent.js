import jwt from "jsonwebtoken";

const authEvent = (req, res, next) => {
  console.log("Auth middleware triggered");

  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    console.log("Token:", token);
    if (!token || token === "null" || token === "undefined") {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    console.log("Decoded token:", decoded);
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid token" });
    // throw new Error("Invalid token");
  }
};

export default authEvent;
