// domain.com/

import MeetupList from "./../components/meetups/MeetupList";

const CAFE = [
  {
    id: "c1",
    title: "First Cafe",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/e5/73/92/photo1jpg.jpg",
    address: "Tehran",
    description: "Cafe 1",
  },
  {
    id: "c2",
    title: "Second Cafe",
    image:
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/24115640/Untitled-design-2022-02-18T123717.280.jpg",
    address: "Tehran",
    description: "Cafe 2",
  },
];

const MainPage = () => {
  return <MeetupList meetups={CAFE} />;
};

export default MainPage;
