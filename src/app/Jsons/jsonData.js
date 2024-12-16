const OrdersData = [
  {
    id: 1,
    name: "sudheer 7881",
    callType: "Current call",
    timeLeft: "09:20 Min",
    date: "2024-10-30",
    status: "Active",
    callJoined: true,
    categoryType: "Business",
    occasion: "Birthday",
    expectedDate: "17-12-2024",
    timeSlot: "3:00 PM - 4:30 PM",
  },
  {
    id: 17,
    name: "Lokesh Janga",
    callType: "Upcomming call",
    timeLeft: "09:20 Min",
    date: "2024-10-30",
    status: "History",
    callJoined: true,
    categoryType: "Business",
    occasion: "Birthday",
    expectedDate: "18-12-2024",
    timeSlot: "10:00 AM - 11:30 AM",
  },
  {
    id: 11,
    name: "Sudheer Janga",
    callType: "Upcomming call",
    timeLeft: "09:20 Min",
    date: "2024-10-30",
    status: "upcomming",
    callJoined: true,
    categoryType: "Business",
    occasion: "Birthday",
    expectedDate: "19-12-2024",
    timeSlot: "9:00 AM - 10:00 AM",
  },
  {
    id: 7,
    name: "pavan kumar",
    callType: "Upcomming call",
    timeLeft: "06:20 Min",
    date: "2024-12-04",
    status: "History",
    callJoined: false,
    categoryType: "Personal",
    occasion: "Birthday",
    expectedDate: "21-12-2024",
    timeSlot: "1:00 PM - 2:30 PM",
  },
  {
    id: 2,
    name: "Traun kumar",
    callType: "Scheduled call",
    timeLeft: "00:20 Hr",
    date: "2024-11-01",
    status: "upcomming",
    callJoined: false,
    categoryType: "Personal",
    occasion: "Birthday",
    expectedDate: "22-12-2024",
    timeSlot: "2:00 PM - 3:00 PM",
  },
  {
    id: 3,
    name: "George",
    callType: "Scheduled call",
    timeLeft: "15:00 Min",
    date: "2024-10-30",
    status: "History",
    callJoined: false,
    categoryType: "Personal",
    occasion: "Birthday",
    expectedDate: "23-12-2024",
    timeSlot: "2:00 PM - 3:00 PM",
  },
  {
    id: 8,
    name: "Thomas",
    callType: "Upcomming call",
    timeLeft: "12:30 Min",
    date: "2024-12-04",
    status: "History",
    callJoined: true,
    categoryType: "Business",
    occasion: "Anniversary",
    expectedDate: "18-12-2024",
    timeSlot: "4:00 PM - 5:30 PM",
  },
  {
    id: 12,
    name: "Mary Jane",
    callType: "Scheduled call",
    timeLeft: "30:00 Min",
    date: "2024-12-05",
    status: "upcomming",
    callJoined: false,
    categoryType: "Personal",
    occasion: "New Year Celebration",
    expectedDate: "01-01-2025",
    timeSlot: "10:00 AM - 11:00 AM",
  },
  {
    id: 9,
    name: "Michael Smith",
    callType: "Scheduled call",
    timeLeft: "45:00 Min",
    date: "2024-12-06",
    status: "Pending",
    callJoined: false,
    categoryType: "Business",
    occasion: "Meeting",
    expectedDate: "15-12-2024",
    timeSlot: "9:00 AM - 10:00 AM",
  },
  {
    id: 4,
    name: "Alice Cooper",
    callType: "Upcomming call",
    timeLeft: "04:30 Min",
    date: "2024-12-04",
    status: "upcomming",
    callJoined: true,
    categoryType: "Personal",
    occasion: "Promotion Celebration",
    expectedDate: "01-01-2025",
    timeSlot: "5:00 PM - 6:00 PM",
  },
  {
    id: 5,
    name: "Emma Watson",
    callType: "Scheduled call",
    timeLeft: "01:00 Hr",
    date: "2024-12-04",
    status: "upcomming",
    callJoined: false,
    categoryType: "Business",
    occasion: "Team Meeting",
    expectedDate: "05-12-2024",
    timeSlot: "11:00 AM - 12:00 PM",
  },
  {
    id: 6,
    name: "David Beckham",
    callType: "Scheduled call",
    timeLeft: "30:00 Min",
    date: "2024-12-05",
    status: "Pending",
    callJoined: false,
    categoryType: "Personal",
    occasion: "Holiday Discussion",
    expectedDate: "20-12-2024",
    timeSlot: "12:00 PM - 1:00 PM",
  },
];

const bookCall = {
  user: {
    name: "Abraham",
    username: "@abraham6438",
    rating: 4,
    profileImage:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?semt=ais_hybrid",
  },
  userSlotsData: [
    {
      date: "06th July",
      pricePerDuration: [
        "1 min/$5",
        "2 min/$8",
        "15 min/$12",
        "30 min/$17",
        "1 Hr/$25",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-11:00", isBooked: true },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "01:00-02:00", isBooked: false },
          { slot: "02:00-03:00", isBooked: false },
        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "06:30-07:30", isBooked: false },
        ],
      },
    },
    {
      date: "07th July",
      pricePerDuration: [
        "1 min/$17",
        "2 min/$17",
        "15 min/$17",
        "30 min/$17",
        // "1 Hr/$17",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-10:30", isBooked: true },
          { slot: "10:30-11:00", isBooked: false },
          { slot: "11:00-12:00", isBooked: false },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "1:00-1:30", isBooked: false },
          { slot: "2:30-03:00", isBooked: false },
          { slot: "3:00-04:00", isBooked: false },
          
        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "6:00-6:30", isBooked: false },
          { slot: "6:30-07:00", isBooked: false },
          { slot: "7:30-08:30", isBooked: false },
        ],
      },
    },
    {
      date: "11th July",
      pricePerDuration: [
        "1 min/$17",
        "2 min/$17",
        "15 min/$17",
        "30 min/$17",
        // "1 Hr/$17",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-10:30", isBooked: true },
          { slot: "10:30-11:00", isBooked: false },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "1:30-02:30", isBooked: false },
        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "7:30-08:30", isBooked: false },
        ],
      },
    },
    {
      date: "15th July",
      pricePerDuration: [
        "1 min/$17",
        "2 min/$17",
        "15 min/$17",
        "30 min/$17",
        // "1 Hr/$17",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-10:30", isBooked: true },
          { slot: "10:30-11:00", isBooked: false },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "1:30-02:30", isBooked: false },
          { slot: "3:00-04:00", isBooked: false },
        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "7:30-08:30", isBooked: false },
        ],
      },
    },
    {
      date: "12th July",
      pricePerDuration: [
        "1 min/$17",
        "2 min/$17",
        "15 min/$17",
        "30 min/$17",
        // "1 Hr/$17",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-10:30", isBooked: true },
          { slot: "10:30-11:00", isBooked: false },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "1:30-02:30", isBooked: false },
        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "7:30-08:30", isBooked: false },
        ],
      },
    },
    {
      date: "09th July",
      pricePerDuration: [
        "1 min/$17",
        "2 min/$17",
        "15 min/$17",
        "30 min/$17",
        // "1 Hr/$17",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-10:30", isBooked: true },
          { slot: "10:30-11:00", isBooked: false },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "1:30-02:30", isBooked: false },
          { slot: "3:30-04:30", isBooked: false },
        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "7:30-08:30", isBooked: false },
        ],
      },
    },
    {
      date: "16th July",
      pricePerDuration: [
        "1 min/$17",
        "2 min/$17",
        "15 min/$17",
        "30 min/$17",
        // "1 Hr/$17",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-10:30", isBooked: true },
          { slot: "10:30-11:00", isBooked: false },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "1:30-02:30", isBooked: false },
        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "7:30-08:30", isBooked: false },
        ],
      },
    },
    {
      date: "17th July",
      pricePerDuration: [
        "1 min/$17",
        "2 min/$17",
        "15 min/$17",
        "30 min/$17",
        // "1 Hr/$17",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-10:30", isBooked: true },
          { slot: "10:30-11:00", isBooked: false },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "1:30-02:30", isBooked: false },
          { slot: "3:30-04:30", isBooked: false },
        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "7:30-08:30", isBooked: false },
        ],
      },
    },
    {
      date: "18th July",
      pricePerDuration: [
        "1 min/$17",
        "2 min/$17",
        "15 min/$17",
        "30 min/$17",
        // "1 Hr/$17",
      ],
      timeslots: {
        morning: [
          { slot: "08:00-08:30", isBooked: true },
          { slot: "08:30-09:00", isBooked: false },
          { slot: "09:00-09:30", isBooked: true },
          { slot: "09:30-10:00", isBooked: false },
          { slot: "10:00-10:30", isBooked: true },
          { slot: "10:30-11:00", isBooked: false },
        ],
        afternoon: [
          { slot: "12:00-12:30", isBooked: false },
          { slot: "12:30-01:00", isBooked: false },
          { slot: "1:30-02:30", isBooked: false },

        ],
        evening: [
          { slot: "05:00-05:30", isBooked: false },
          { slot: "05:30-06:00", isBooked: false },
          { slot: "7:30-08:30", isBooked: false },
        ],
      },
    },
  ],
};

const callsData = 
[
    {
      heading:"Active Calls",
      data:[
        {
          img:"https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg",
          userName:"sudheer7881",
          email:"@sudheerjanga"
        }
      ]
    },
    {
      heading:"Upcoming Calls",
      data:[
        {
          img:"https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
          userName:"sudheer7881",
          email:"@sudheerjanga"
        },
        {
          img:"https://raajratna.com/wp-content/uploads/2019/01/person5.jpg",
          userName:"sudheer7881",
          email:"@sudheerjanga"
        }
      ]
    }
  ]
const Data = { OrdersData, bookCall,callsData };
export default Data;
