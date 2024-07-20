import React, { createContext, useState, useContext } from 'react';

// Create a context
const ReportContext = createContext();

// Create a provider component
export const ReportProvider = ({ children }) => {
  const [reportData, setReportData] = useState({
    "Barangay Clearance": {
      font: 'Arial',
      fontSize: 14,
      fontStyle: 'normal',
      content: 'Resident Name: Juan Dela Cruz\nAddress: 123 Barangay St.\nIssued On: July 1, 2024'
    },
    "Certificate of Indigency": {
      font: 'Arial',
      fontSize: 14,
      fontStyle: 'normal',
      content: 'Resident Name: Maria Clara\nAddress: 456 Barangay Ave.\nIndigency Status: Verified\nIssued On: July 1, 2024'
    },
    "Barangay ID": {
      font: 'Arial',
      fontSize: 14,
      fontStyle: 'normal',
      content: 'Resident Name: Jose Rizal\nID Number: 78910\nAddress: 789 Barangay Blvd.\nIssued On: July 1, 2024'
    },
    "Business Permit": {
      font: 'Arial',
      fontSize: 14,
      fontStyle: 'normal',
      content: 'Business Name: Sari-Sari Store\nOwner: Andres Bonifacio\nAddress: 101 Barangay Corner\nPermit Validity: July 1, 2024 - June 30, 2025'
    },
    "Barangay Certificate": {
      font: 'Arial',
      fontSize: 14,
      fontStyle: 'normal',
      content: 'Resident Name: Emilio Aguinaldo\nCertificate Type: Residency\nAddress: 202 Barangay Drive\nIssued On: July 1, 2024'
    }
  });

  return (
    <ReportContext.Provider value={{ reportData, setReportData }}>
      {children}
    </ReportContext.Provider>
  );
};

// Custom hook to use the report context
export const useReportContext = () => useContext(ReportContext);
