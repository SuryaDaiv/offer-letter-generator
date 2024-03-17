import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocuments';

function PDFPreview({ formData }) {
  const fileName = `${formData.firstName}-${formData.lastName}-offer-letter.pdf`;

  return (
    <div style={{ width: '40%' }}>
      <PDFDownloadLink document={<PDFDocument formData={formData} />} fileName={fileName}>
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  );
}

export default PDFPreview;
