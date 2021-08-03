import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNormal,
  setfighting,
  setflying,
  setpoison,
  setground,
  setrock,
  setbug,
  setghost,
  setsteel,
  setfire,
  setwater,
  setgrass,
  setelectric,
  setpsychic,
  setice,
  setdragon,
  setdark,
  setfairy,
  setunknown,
  setshadow
} from "../../redux/pokemonType";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function TypeMenu() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const history = useHistory();
  return (
    <div>
      <>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setNormal());
                history.push("/types");
              }}
            >
              Normal
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setfighting());
                history.push("/types");
              }}
            >
              Fighting
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setflying());
                history.push("/types");
              }}
            >
              Flying
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setpoison());
                history.push("/types");
              }}
            >
              Poison
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setground());
                history.push("/types");
              }}
            >
              Ground
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setrock());
                history.push("/types");
              }}
            >
              Rock
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setbug());
                history.push("/types");
              }}
            >
              Bug
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setghost());
                history.push("/types");
              }}
            >
              Ghost
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setsteel());
                history.push("/types");
              }}
            >
              Steel
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setfire());
                history.push("/types");
              }}
            >
              Fire
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setwater());
                history.push("/types");
              }}
            >
              Water
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setgrass());
                history.push("/types");
              }}
            >
              Grass
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setelectric());
                history.push("/types");
              }}
            >
              Electric
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setpsychic());
                history.push("/types");
              }}
            >
              Psychic
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setice());
                history.push("/types");
              }}
            >
              Ice
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setdragon());
                history.push("/types");
              }}
            >
              Dragon
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{ color: "red", fontSize: "16px", fontWeight: "700" }}
              onClick={() => {
                dispatch(setfairy());
                history.push("/types");
              }}
            >
              Fairy
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    </div>
  );
}

export default TypeMenu;
