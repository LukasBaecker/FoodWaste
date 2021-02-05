import { relative } from "path";
import React, { useState, useEffect } from "react";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import marker_ico from "../img/markerIcon.png";
import book from "../img/book.png";
import exchange from "../img/exchange.png";
import food from "../img/food.png";
import money from "../img/money.png";
import bin from "../img/bin.png";
import repair from "../img/repair.png";
import trash from "../img/trash.png";
import recyc from "../img/recyclingPoints.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import L from "leaflet";
import Alert from "react-bootstrap/Alert";

const OwnMarker = (point) => {
  const [activate, setActive] = useState(false);

  const onShowAlert = () => {
    setActive(true);
  };

  useEffect(() => {
    if (activate === true) {
      window.setTimeout(() => {
        setActive(false);
      }, 2000);
    }
  }, [activate]);

  var iconM = marker_ico;
  var xM = 42;
  var iconS = [25, 41];

  if (point.properties.object_type == "container") {
    iconM = bin;
    iconS = [xM, xM];
  }
  if (point.properties.object_type == "wasteBasket") {
    iconM = trash;
    iconS = [xM, xM];
  }
  if (point.properties.object_type == "givebox") {
    iconM = exchange;
    iconS = [xM, xM];
  }
  if (point.properties.object_type == "publicBookshelf") {
    iconM = book;
    iconS = [xM, xM];
  }
  if (point.properties.object_type == "store") {
    iconM = money;
    iconS = [xM, xM];
  }
  if (point.properties.object_type == "pickUpPoint") {
    iconM = food;
    iconS = [xM, xM];
  }
  if (point.properties.object_type == "repairShop") {
    iconM = repair;
    iconS = [xM, xM];
  }
  if (point.properties.object_type == "secondHandStore") {
    iconM = money;
    iconS = [xM, xM];
  }
  if (point.properties.object_type == "recyclingYard") {
    iconM = recyc;
    iconS = [xM, xM];
  }

  var orangeIcon = L.icon({
    iconUrl: iconM,
    iconSize: iconS, // size of the icon
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  // make first sentences
  // use obj type and rec type
  if (point.properties.recycling_type !== "store") {
    // rec type is not ALSO store
    var type_desc = (
      <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
        This is a {point.properties.object_type} for{" "}
        {point.properties.recycling_type}.
      </p>
    );
  } else {
    // to avoid "store for store"
    var type_desc = (
      <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
        This is a {point.properties.recycling_type}.
      </p>
    );
  }

  // name
  if (point.properties.name !== "FALSE") {
    // name given
    var name = (
      <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
        It is called "{point.properties.name}".
      </p>
    );
  } else {
    // no name given
    var name = <p></p>;
  }

  // add_desc out of address and location_desc
  if (point.properties.address !== "FALSE") {
    if (point.properties.location_desc !== "FALSE") {
      // if address and loca_disc given
      var add_desc = (
        <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
          It is located at {point.properties.address} (
          {point.properties.location_desc}).
        </p>
      );
    } else {
      // if address given
      var add_desc = (
        <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
          It is located at {point.properties.address}.
        </p>
      );
    }
  } else {
    if (point.properties.location_desc !== "FALSE") {
      // if loc_disc given
      var add_desc = (
        <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
          It is located at {point.properties.location_desc}.
        </p>
      );
    } else {
      // if none given
      var add_desc = <p></p>;
    }
  }

  // hours
  if (point.properties.hours !== "FALSE") {
    //hours given
    var hours_desc = (
      <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
        It has the following opening hours: {point.properties.hours}
      </p>
    );
  } else {
    var hours_desc = <p></p>;
  }

  var locString =
    "" +
    point.geometry.coordinates[1] +
    "°N, " +
    point.geometry.coordinates[0] +
    "°E";
  var loc = (
    <div>
      <CopyToClipboard text={locString}>
        <button
          className='copy-link-button'
          onClick={() => {
            onShowAlert();
          }}>
          <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
            click here to copy coordinates: {point.geometry.coordinates[1]} °N,{" "}
            {point.geometry.coordinates[0]} °E
          </p>
        </button>
      </CopyToClipboard>
    </div>
  );

  // website, tel
  if (point.properties.website !== "FALSE") {
    if (point.properties.telephone !== "FALSE") {
      // web and phone given
      var web_desc = (
        <table>
          <tbody>
            <tr>
              <td>
                <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
                  website
                </p>
              </td>
              <td>
                <p
                  style={{ fontSize: 15, fontFamily: "Arial", float: "right" }}>
                  {point.properties.website}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
                  telephone
                </p>
              </td>
              <td>
                <p
                  style={{ fontSize: 15, fontFamily: "Arial", float: "right" }}>
                  {point.properties.telephone}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      // web but no phone
      var web_desc = (
        <table>
          <tbody>
            <tr>
              <td>
                <p style={{ fontSize: 15, fontFamily: "Arial", float: "left" }}>
                  website
                </p>
              </td>
              <td>
                <p
                  style={{ fontSize: 15, fontFamily: "Arial", float: "right" }}>
                  {point.properties.website}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  } else {
    // else: none, so "empty" table is passed
    var web_desc = (
      <table>
        <tbody>
          <tr>
            <td>
              <p style={{ fontSize: 2, fontFamily: "Arial", float: "left" }}>
                .
              </p>
            </td>
            <td>
              <p style={{ fontSize: 2, fontFamily: "Arial", float: "left" }}>
                .
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <>
      <Marker
        position={relative}
        icon={orangeIcon}
        key={"key" + point.geometry.coordinates + point.properties.id}
        position={[
          point.geometry.coordinates[1],
          point.geometry.coordinates[0],
        ]}>
        <Popup className='request-popup'>
          <img className='center' src={iconM} alt='this is a marker' />

          {type_desc}
          {name}
          {add_desc}
          {hours_desc}
          {loc}
          {web_desc}
        </Popup>
      </Marker>
      <Alert className='clipboard-alert' show={activate} variant={"light"}>
        location copied to clipboard.
      </Alert>
    </>
  );
};
export default OwnMarker;
