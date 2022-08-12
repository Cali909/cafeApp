import { useRouter } from "next/router";
import { Fragment } from "react";
import classes from "../../components/meetups/MeetupDetail.module.css";
import { CAFE } from "../index";
import Head from "next/head";

const MeetupDetails = () => {
  const router = useRouter();
  const cafeId = router.query;
  const id = cafeId.meetupId;
  const wantedCafe = CAFE.find((cafe) => cafe.id === id);
  console.log(wantedCafe);
  return (
    <Fragment>
      <Head>
        <title>{wantedCafe.title}</title>
      </Head>
      <div className={classes.details}>
        <img
          className={classes.img}
          src={wantedCafe.image}
          alt={wantedCafe.title}
        />
        <h1>{wantedCafe.title}</h1>
        <p>{wantedCafe.address}</p>
        <p>{wantedCafe.description}</p>
      </div>
    </Fragment>
  );
};

export default MeetupDetails;
