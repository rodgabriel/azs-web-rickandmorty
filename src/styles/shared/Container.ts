import styled from "styled-components";

export interface Props {
  width?: string;
  minWidth?: string;
  height?: string;
  minHeight?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  shadow?: boolean;
  flex?: string;
  flexDirection?: "row" | "column";
  justifyContent?: string;
  alignItems?: string;
  position?: string;
  zIndex?: number;
}

const Container = styled.div<Props>`
  display: flex;
  flex: ${(props) => props.flex && props.flex};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth && props.minWidth};
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minHeight && props.minHeight};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  position: ${(props) => props.position && props.position};
  overflow-y: visible;
  z-index: ${(props) => props.zIndex || 1};
`;

export default Container;
