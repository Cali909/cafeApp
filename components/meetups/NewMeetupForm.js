import { useState } from "react";
import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const t1 = performance.now(); //TODO: make it immutable
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [titleTouched, setTitleTouched] = useState(false);
  const [image, setImage] = useState("");
  const [imageTouched, setImageTouched] = useState(false);
  const [address, setAddress] = useState("");
  const [addressTouched, setAddressTouched] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionTouched, setDescriptionTouched] = useState(false);

  let formIsValid = false;

  const titleIsValid = title.trim() !== "";
  const imageIsValid = image.trim() !== ""; //TODO: improve img check
  const addressIsValid = address.trim() !== "";
  const descriptionIsValid = description.trim() !== "";

  if (titleIsValid && imageIsValid && addressIsValid && descriptionIsValid) {
    formIsValid = true;
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleTouched(true);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
    setImageTouched(true);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressTouched(true);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionTouched(true);
  };

  function submitHandler(event) {
    event.preventDefault();

    setTitleTouched(true);
    setImageTouched(true);
    setAddressTouched(true);
    setDescriptionTouched(true);

    if (!formIsValid) {
      return;
    }

    formIsValid = true;

    const meetupData = {
      title: title,
      image: image,
      address: address,
      description: description,
    };

    props.onAddMeetup(meetupData);

    router.replace("/");
    const t2 = performance.now();
    console.log(t2 - t1);
  }

  const titleInputIsInvalid = !titleIsValid && titleTouched;
  const imageInputIsInvalid = !imageIsValid && imageTouched;
  const addressInputIsInvalid = !addressIsValid && addressTouched;
  const descriptionInputIsInvalid = !descriptionIsValid && descriptionTouched;

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Cafe Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Cafe Title"
            onChange={handleTitleChange}
          />
          {titleInputIsInvalid && (
            <p className={classes.error}>Title Can't Be Empty</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Cafe Image</label>
          <input
            type="url"
            id="image"
            placeholder="image URL here"
            onChange={handleImageChange}
          />
          {imageInputIsInvalid && (
            <p className={classes.error}>Image Can't Be Empty</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Where Can I Find Your Cafe"
            onChange={handleAddressChange}
          />
          {addressInputIsInvalid && (
            <p className={classes.error}>Address Can't Be Empty</p>
          )}
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            placeholder="Write A Few Lines About Your Cafe"
            onChange={handleDescriptionChange}
          ></textarea>
          {descriptionInputIsInvalid && (
            <p className={classes.error}>Description Can't Be Empty</p>
          )}
        </div>
        <div className={classes.actions}>
          <button>Add Cafe</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
