import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import addvertise from "../Add.png";
import share from "../share.png";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import { decode } from "js-base64";

const Profile = () => {
  let { userid } = useParams();
  const [collection, setCollection] = useState([]);

  const fetchPost = async () => {
    if (userid) {
      let newId = decode(userid);
      const docRef = doc(db, "Users", `${newId}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCollection(docSnap.data());
      } else {
        console.log("user not found");
      }
    } else {
      console.log("user id not in url");
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <Container>
      <div className="p-2">
        <img className="advertise" src={addvertise} alt="addvertise" />
      </div>
      <div className="profile-page">
        <div className="profile-detail">
          {/* <img className="share" src={share} alt="share" /> */}
          <div className="profile"></div>
          <div>
            <h6>{decode(userid)}</h6>
          </div>
        </div>
        <Row xs={2} sm={3} className="layout-grid">
          {Object.keys(collection).length > 0 ? (
            Object.keys(collection).map((item) => {
              let image = collection[item]?.CollectionItems[0]?.imageStorageURL
              return (
                <Col>
                  <div className="layout-box">
                    <div className="layout-img">
                      <img src={image} />
                    </div>
                    <h4>{item}</h4>
                  </div>
                </Col>
              );
            })
          ) : (
            <>Collection not found</>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default Profile;
