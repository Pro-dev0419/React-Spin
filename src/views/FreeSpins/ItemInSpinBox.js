import React, {useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import FeaturedCardItem from "../../components/FeaturedCardItem/FeaturedCardItem";
import BoxCardItem from "../../components/BoxCardItem/BoxCardItem";
import { useSelector } from "react-redux";
import "./FreeSpins.scss";

const rarityOrder = {
  'LEGENDARY': 5,
  'EPIC': 4,
  'RARE': 3,
  'UNCOMMON': 2,
  'COMMON': 1
};
const ItemInSpinBox = () => {
  const boxData = useSelector((state) => state.box.currentBox);
  
  useEffect(() => {
    // console.log(boxData)
  }, [boxData])
  return (
    <div className="item-in-main">
      <Container>
        <h1 style={{marginBottom: 10}}>ITEMS IN THIS BOX</h1>
        <Row>
          
          {boxData &&
            boxData.rewards.slice().sort((a, b) => rarityOrder[b.rarity] - rarityOrder[a.rarity]).map((item, i) => (
              <Col sm={12} md={6} lg={4} xxl={3} key={i}>
                <BoxCardItem data={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemInSpinBox;
