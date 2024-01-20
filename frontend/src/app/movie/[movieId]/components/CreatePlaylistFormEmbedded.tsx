import { Form, Formik, FormikHelpers } from "formik";
import React, { useContext } from "react";
import {
  newPlaylistInitialValues,
  newPlaylistValidationSchema,
  TNewPlaylistFormType,
} from "./utils";
import LoginInput from "@/app/components/LoginInput";
import axios from "axios";
import { movieContext } from "../../movieContext";
import loginContext from "@/app/loginContext";
import PlaylistInterface from "../../../../../interfaces/Playlist.model";
import { formContext } from "./formContext";
function CreatePlaylistFormEmbedded() {
  const { setPlaylists } = useContext(movieContext);
  const { user } = useContext(loginContext);
  const { status, setStatus } = useContext(formContext);
  const addNewPlaylist = async (
    values: TNewPlaylistFormType,
    helpers: FormikHelpers<TNewPlaylistFormType & { response: string }>
  ) => {
    setStatus("Creating new playlist...");
    const url = "http://localhost:3000/api/playlists/";
    try {
      const request = await axios.post(url, {
        ...values,
        userId: user?.userId,
      });
      if (request.status === 200) {
        setPlaylists((prevPlaylist: PlaylistInterface[]) => [
          ...prevPlaylist,
          { ...request.data.data, movies: [] },
        ]);
        helpers.resetForm();
        setStatus("New playlist created successfully!");
      } else {
        helpers.setErrors({
          response: "Unfortunately, we could not create a new playlist 😞",
        });
        console.log(values, user?.userId);
      }
    } catch (error) {
      helpers.setErrors({
        response: "Unfortunately, we could not create a new playlist 😞",
      });
    }
  };
  return (
    <Formik
      initialValues={newPlaylistInitialValues}
      validationSchema={newPlaylistValidationSchema}
      onSubmit={addNewPlaylist}
    >
      {({ values, isValid, dirty, touched, errors }) => (
        <Form>
          <p className="important-errors text-center">
            {errors.response ? errors.response : null}
            {status ? status : null}
          </p>
          <LoginInput label="Name" name="name" type="text" placeholder="Name" />
          <button
            type="submit"
            className="btn bg-navy hover:bg-lightNavy text-end disabled:bg-gray"
            disabled={!(isValid && dirty)}
          >
            Create
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default CreatePlaylistFormEmbedded;
