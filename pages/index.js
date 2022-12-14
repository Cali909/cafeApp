// domain.com/

import MeetupList from "./../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";

export const CAFE = [
  {
    id: "c1",
    title: "First Cafe",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80",
    address: "Tehran",
    description: "Cafe 1",
  },
  {
    id: "c2",
    title: "Second Cafe",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    address: "Tehran",
    description: "Cafe 2",
  },
  {
    id: "c3",
    title: "Third Cafe",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    address: "Tehran",
    description: "Cafe 3",
  },
  {
    id: "c4",
    title: "Forth Cafe",
    image:
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    address: "Tehran",
    description: "Cafe 4",
  },
];

const MainPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Cafe</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  //fetch data
  return {
    props: {
      meetups: CAFE,
    },
  };
}

export default MainPage;
