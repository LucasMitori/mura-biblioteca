import PaymentCheckout from "../../components/PaymentCheckout/PaymentCheckout";
import { MainSpace, QrCodeSpace } from "./styles";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { useState } from "react";

const MainPage = () => {
  const [link, setLink] = useState("");
  const [qrcodelink, setQrcodelink] = useState("");

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setQrcodelink(url);
      }
    );
  }

  function handleQrCode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <>
      <MainSpace>
        <QrCodeSpace>
          <QRCode value={link} />
          <input
            placeholder="Digite seu link..."
            value={link}
            onChange={(e) => handleQrCode(e)}
          />
          <a href={qrcodelink} download={`qrcode.png`}>
            Baixar QrCode
          </a>
        </QrCodeSpace>
        <PaymentCheckout />
      </MainSpace>
    </>
  );
};

export default MainPage;
