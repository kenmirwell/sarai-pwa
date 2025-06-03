import farmers from "../assets/farmers.png"
import farmerRaking from "../assets/farmer_raking.png"
import hatFarmer from "../assets/hat_farmer.png"
import truckFarming from "../assets/truck_farming.png"
import feelingFarmer from "../assets/feeling_farmer.png"

const Courses = [
  {
    title: "Intro to Organic Farming",
    description: "Learn the basics of chemical-free farming techniques and soil health.",
    category: "Organic Farming",
    progress: 20,
    thumbnail: farmers
  },
  {
    title: "Composting for Beginners",
    description: "Turn waste into gold with effective composting techniques.",
    category: "Organic Farming",
    progress: 33,
    thumbnail: truckFarming
  },
  {
    title: "Introduction to Vermiculture",
    description: "Use worms to enhance soil fertility and crop health.",
    category: "Organic Farming",
    progress: 0,
    thumbnail: feelingFarmer
  },
  {
    title: "Crop Rotation Techniques",
    description: "Maximize your yield while maintaining soil fertility.",
    category: "Crop Production",
    progress: 0,
    thumbnail: farmerRaking
  },
  {
    title: "Rice Production Basics",
    description: "Master the process of planting and harvesting rice.",
    category: "Crop Production",
    progress: 0,
    thumbnail: farmerRaking
  },
  {
    title: "Urban and Container Farming",
    description: "Explore techniques for small-scale farming in limited spaces.",
    category: "Crop Production",
    progress: 0,
    thumbnail: hatFarmer
  },
  {
    title: "Pest Management Strategies",
    description: "Learn integrated pest control without overusing chemicals.",
    category: "Crop Protection",
    progress: 0,
    thumbnail: feelingFarmer
  },
  {
    title: "Soil Health and Fertility",
    description: "Identify soil problems and solutions for better yields.",
    category: "Crop Protection",
    progress: 0,
    thumbnail: farmerRaking
  },
  {
    title: "Climate-Smart Agriculture",
    description: "Adapt farming methods to respond to climate change.",
    category: "Crop Protection",
    progress: 0,
    thumbnail: farmers
  },
  {
    title: "Irrigation Systems 101",
    description: "Understand the fundamentals of modern irrigation methods.",
    category: "Farm Technology",
    progress: 0,
    thumbnail: hatFarmer
  },
  {
    title: "Using Drones in Farming",
    description: "Get started with precision farming using drones and data.",
    category: "Farm Technology",
    progress:0,
    thumbnail: truckFarming
  },
  {
    title: "Post-Harvest Handling",
    description: "Reduce losses and maintain crop quality after harvest.",
    category: "Farm Technology",
    progress: 0,
    thumbnail: truckFarming
  },
  {
    title: "Farm Business Planning",
    description: "Create a viable plan for a profitable farming business.",
    category: "Agribusiness",
    progress: 0,
    thumbnail: farmers
  },
  {
    title: "Livestock Integration",
    description: "Integrate animals into your farm system efficiently.",
    category: "Agribusiness",
    progress: 0,
    thumbnail: hatFarmer
  },
  {
    title: "Seed Saving Techniques",
    description: "Preserve and reuse seeds from your best crops.",
    category: "Agribusiness",
    progress: 0,
    thumbnail: feelingFarmer
  }
]

export default Courses
