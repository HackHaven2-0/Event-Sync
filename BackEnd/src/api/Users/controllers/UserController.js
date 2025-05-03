import UserService from "../services/userService.js";

export const getUserProfile = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await UserService.updateUser(req.user.id, req.body);
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getOrganizerEvents = async (req, res) => {
  try {
    if (req.user.role !== "organizer") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }
    const events = await UserService.getEventsByOrganizer(req.user.id);
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};