const data = [
    {
      "id": 1,
      "thumbnail": "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "What is a domain name for beginners and why it matters",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonummy placerat, erat in ullamcorper commodo, egestas in tellus. Nulla bibendum lectus vel justo. Vestibulum eu dui. Nulla egestas, nunc vel rutrum, justo erat at massa.",
      "date": "2023-10-10",
      "catorey":"technology",
      "user": {
        "id": 101,
        "follower":"45",
        "username": "john_doe",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 2,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "What is web design? A comprehensive guide",
      "content": "Consectetur adipiscing elit. Praesent vel arcu. Proin ullamcorper in ipsum ac euismod. Phasellus bibendum vel sem. Vestibulum ante ipsum primis in faucibus orci luctus.",
      "date": "2023-10-11",
      "catorey":"farming",
      "color":"red",
      "user": {
        "id": 102,
        "follower":"495",
        "username": "jane_smith",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 3,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "An extremely comprehensive guide to branding and its importance",
      "content": "Sed nonummy placerat, erat in ullamcorper commodo, egestas in tellus. Maecenas ac nunc. Fusce eu arcu. Nulla id libero. Nulla egestas id sem. Aliquam id.",
      "date": "2023-10-12",
      "catorey":"mobile",
      "color":"blue",
      "user": {
        "id": 103,
        "follower":"495",
        "username": "alice_carter",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 4,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Vestibulum Eu Dui",
      "content": "Vestibulum eu dui. Nullam dictum felis eu pede mollis pretium. Nulla egestas, nunc vel rutrum, justo erat at massa. Nullam ac neque.",
      "date": "2023-10-13",
      "catorey":"laptop",
      "color":"orange",
      "user": {
        "id": 104,
        "follower":"325",
        "username": "bob_johnson",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 5,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Nulla Egestas, Nunc Vel Rutrum",
      "content": "Nulla egestas, nunc vel rutrum, justo erat at massa. Nullam ac neque. Quisque porta. Fusce eu arcu. Nulla id libero. Fusce libero orci.",
      "date": "2023-10-14",
      "catorey":"reviews",
      "color":"amber",
      "user": {
        "id": 105,
        "follower":"715",
        "username": "emily_wilson",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 6,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Vestibulum Eu Dui",
      "content": "Vestibulum eu dui. Nulla egestas, nunc vel rutrum, justo erat at massa. Nullam ac neque. Quisque porta. Fusce eu arcu. Nulla id libero.",
      "date": "2023-10-15",
      "catorey":"plastic",
      "color":"lime",
      "user": {
        "id": 106,
        "follower":"1495",
        "username": "david_anderson",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 7,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Praesent Vel Arcu",
      "content": "Praesent vel arcu. Nullam dictum felis eu pede mollis pretium. Nulla egestas, nunc vel rutrum, justo erat at massa. Nullam ac neque.",
      "date": "2023-10-16",
      "catorey":"plastic",
      "color":"green",
      "user": {
        "id": 107,
        "username": "susan_brown",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 8,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Fusce Eu Arcu",
      "content": "Fusce eu arcu. Quisque porta. Nulla id libero. Nullam dictum felis eu pede mollis pretium. Nulla egestas, nunc vel rutrum, justo erat at massa.",
      "date": "2023-10-17",
      "user": {
        "id": 108,
        "username": "michael_miller",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 9,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Aliquam Id",
      "content": "Aliquam id. Nulla egestas id sem. Fusce eu arcu. Nulla id libero. Nullam dictum felis eu pede mollis pretium. Nulla egestas, nunc vel rutrum, justo erat at massa.",
      "date": "2023-10-18",
      "user": {
        "id": 109,
        "username": "laura_jones",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    },
    {
      "id": 10,
      "thumbnail": "https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Quisque Porta",
      "content": "Quisque porta. Nulla id libero. Nullam dictum felis eu pede mollis pretium. Nulla egestas, nunc vel rutrum, justo erat at massa. Nullam ac neque.",
      "date": "2023-10-19",
      "user": {
        "id": 110,
        "username": "chris_wilson",
        "profile": "https://images.pexels.com/photos/4450359/pexels-photo-4450359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    }
  ]
  export default data 