import NewMeetupForm from "./../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const handleAddMeetup = (data) => {
    console.log(data.address);
  };
  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
};

export default NewMeetupPage;
