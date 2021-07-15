import React from "react";
import { CONTACT_ROUTE } from "../utils/routes";

function ContactUsPage() {
  return (
    <div>
      <h1>Contact Moi</h1>
      <div className="container my-5 py-5 z-depth-1">
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row d-flex justify-content-center">
            <form
              className="text-center"
              action={CONTACT_ROUTE}
              method="post"
            >
              <p className="h4 mb-4">Leave a Message</p>
              <input
                type="text"
                name="name"
                className="form-control mb-4"
                placeholder="Name"
              />
              <input
                type="text"
                name="message"
                className="form-control"
                placeholder="Message"
              />
              <br />

              <button
                type="submit"
                className="btn btn-outline-dark waves-effect"
              >
                Post
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUsPage;
