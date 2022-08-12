import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { Fragment } from "react";

const NewMeetupPage = () => {
  const handleAddMeetup = (data) => {
    console.log(data);
    //send data to an API
  };

  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </Fragment>
  );
};

export default NewMeetupPage;
