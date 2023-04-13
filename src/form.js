import { Grid, Box } from "@mui/material";
import Barcode from "react-barcode";
const form = () => {
  const barcodeValue = "202300003269";
  const barcodeStyle = {
    width: "200px",
    height: "100px",
  };

  return (
    <div style={barcodeStyle}>
      <Barcode value={barcodeValue} />
    </div>
  );
};

export default form;
