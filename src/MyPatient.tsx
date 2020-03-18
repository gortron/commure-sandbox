import React from "react";
import { FhirDataQuery } from "@commure/components-data";
import { PatientCard } from "@commure/components-core";
import { Patient } from "@commure/fhir-types/r4/types";

const MyPatient = () => {
  return (
    <FhirDataQuery queryString="Patient">
      {({ data }) => {
        if (!data) {
          return "Loading...";
        }

        // console.log(`Loaded patient Bundle: ${JSON.stringify(data, null, 2)}`);
        // return "Done loading!";

        const patients: Patient[] = data.entry;
        return patients.map(patient => <PatientCard value={patient} />);
      }}
    </FhirDataQuery>
  );
};

export default MyPatient;

// Loaded patient Bundle: {
//   "resourceType": "Bundle",
//   "type": "searchset",
//   "link": [
//     {
//       "relation": "self",
//       "url": "Patient?&_count=50"
//     }
//   ],
//   "entry": [
//     {
//       "fullUrl": "https://api-50574254.developer.commure.com/api/v1/r4/Patient/1146dd92-50ee-48f5-8087-6442c780cd45",
//       "resource": {
//         "resourceType": "Patient",
//         "id": "1146dd92-50ee-48f5-8087-6442c780cd45"
