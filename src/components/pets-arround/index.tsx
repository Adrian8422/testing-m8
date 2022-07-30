import React, { useEffect } from "react";
import { Card } from "components/card-pet";
import { getLatAndLng } from "lib/api";
import { useGetAlgoliaReports, useMeLatLng, useSetAlgolia } from "hooks/atom";
// type PropsPetsArround = {
//   results: [];
// };

function PetsArround() {
  const meReports = useGetAlgoliaReports();
  const latAndLng = useMeLatLng();
  const [reports, setReportes] = useSetAlgolia();
  useEffect(() => {
    if (latAndLng) {
      getLatAndLng(latAndLng).then((data) => {
        setReportes(data);
      });
    }
  }, [latAndLng]);
  return (
    <div style={{ marginTop: "60px" }}>
      {meReports[0] ? (
        meReports.map((card) => (
          <Card
            key={card["objectID"]}
            name={card["name"]}
            location={card["location"]}
            pictureURL={card["pictureURL"]}
            emailUser={card["emailUser"]}
            children="reportar"
          />
        ))
      ) : (
        <h3>No hay reportes</h3>
      )}
    </div>
  );
}
export { PetsArround };
