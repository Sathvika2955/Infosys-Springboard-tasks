const Slot = require("../models/slot");

exports.getSlots = async (req, res) => {
  try {
    const slots = await Slot.find();

    if (slots.length === 0) {
      return res.status(200).json({
        success: false,
        message: "No slots found",
        data: []
      });
    }

    return res.status(200).json({
      success: true,
      message: "Slots retrieved successfully",
      count: slots.length,
      data: slots
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};
