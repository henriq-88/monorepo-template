import "swagger-ui-react/swagger-ui.css";
import dynamic from "next/dynamic";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

interface SwaggerUIProps {}

const ApiDocs: React.FC<SwaggerUIProps> = (props) => {
  return (
    <>
      <SwaggerUI url="/api/openapi.json" />
    </>
  );
};

export default ApiDocs;
