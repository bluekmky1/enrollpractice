import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ListItem = styled(motion.div)`
  z-index: 99;
  min-width: 80px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f9fc;

  font-size: 9px;
  font-weight: 600;
  cursor: pointer;
`;

const ListWhiteSpace = styled.div`
  width: 100%;
  height: 28px;
  border-bottom: 1px black solid;
`;

interface ListBannerProps {
  menuList: string[];
}

function ListBanner({ menuList }: ListBannerProps) {
  const [focus, setFocus] = useState(menuList[0]);

  return (
    <ListContainer>
      {menuList.map((menu) => (
        <ListItem
          key={menu}
          onClick={() => setFocus(menu)}
          animate={{
            transition: { duration: 0.1 },
            backgroundColor: focus === menu ? "#fff" : "#f7f9fc",
            color: focus === menu ? "#000000" : "#666666",
            border: focus === menu ? "1px solid #000000" : "1px solid #d5d9e0",
            borderBottom:
              focus === menu ? "1px solid transparent" : "1px solid #000000",
          }}
        >
          {menu}
        </ListItem>
      ))}
      <ListWhiteSpace />
    </ListContainer>
  );
}

export default ListBanner;
