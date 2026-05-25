import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const projectRoot = process.cwd();
const outputPath = path.join(projectRoot, 'public', 'forms', 'Hope4DLiving_Scholarship_Form_v2.pdf');
const logoPath = path.join(projectRoot, 'public', 'logo', 'logo1.png');

const doc = new PDFDocument({ size: 'A4', margin: 42, pdfVersion: '1.4' });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const colors = {
  accent: '#1d4ed8',
  accentSoft: '#eff6ff',
  dark: '#0f172a',
  muted: '#475569',
  line: '#cbd5e1',
  placeholder: '#94a3b8',
};

const pageWidth = 595.28;
const left = 42;
const right = 42;
const contentWidth = pageWidth - left - right;
const gutter = 14;
const halfWidth = (contentWidth - gutter) / 2;

function drawHeader() {
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, left, 34, { fit: [62, 62] });
  }

  doc.roundedRect(118, 34, 435, 62, 14).fillColor(colors.accentSoft).fillAndStroke(colors.accentSoft, colors.accentSoft);
  doc.font('Helvetica-Bold').fontSize(18).fillColor(colors.dark).text('HOPE 4D LIVING GLOBAL OUTREACH', 132, 46);
  doc.font('Helvetica-Bold').fontSize(14).fillColor(colors.accent).text('SCHOLARSHIP APPLICATION FORM', 132, 68);
  doc.font('Helvetica').fontSize(9).fillColor(colors.muted).text('Educational Support Fund', 132, 88);
  doc.moveTo(left, 112).lineTo(left + contentWidth, 112).lineWidth(1).strokeColor(colors.line).stroke();
}

function drawPageTitle(title, subtitle) {
  doc.font('Helvetica-Bold').fontSize(12).fillColor(colors.dark).text(title, left, 124);
  if (subtitle) {
    doc.font('Helvetica').fontSize(9).fillColor(colors.muted).text(subtitle, left, 140);
  }
}

function drawField(label, valueHint, x, y, width, height = 24) {
  doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.dark).text(label, x, y);
  doc.roundedRect(x, y + 16, width, height, 5).lineWidth(0.8).strokeColor(colors.line).stroke();
  doc.font('Helvetica').fontSize(9).fillColor(colors.placeholder).text(valueHint, x + 8, y + 24);
}

function drawTextArea(label, hint, x, y, width, height) {
  doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.dark).text(label, x, y);
  doc.roundedRect(x, y + 16, width, height, 6).lineWidth(0.8).strokeColor(colors.line).stroke();
  doc.font('Helvetica').fontSize(9).fillColor(colors.placeholder).text(hint, x + 8, y + 26, { width: width - 16 });
}

function drawCheckbox(text, x, y) {
  doc.roundedRect(x, y, 12, 12, 2).lineWidth(0.8).strokeColor(colors.placeholder).stroke();
  doc.font('Helvetica').fontSize(9).fillColor(colors.dark).text(text, x + 18, y - 1);
}

function drawSubmissionNote() {
  const footerY = 734;
  doc.moveTo(left, footerY).lineTo(left + contentWidth, footerY).lineWidth(1).strokeColor(colors.line).stroke();
  doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.dark).text('Declaration', left, footerY + 12);
  doc
    .font('Helvetica')
    .fontSize(9)
    .fillColor(colors.muted)
    .text(
      'I confirm that the information provided is true and complete. I understand that support is subject to review and availability.',
      left,
      footerY + 28,
      { width: contentWidth, lineGap: 2 }
    );

  const signatureY = footerY + 76;
  doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.dark).text('Applicant Signature', left, signatureY);
  doc.roundedRect(left, signatureY + 16, 260, 24, 5).lineWidth(0.8).strokeColor(colors.line).stroke();
  doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.dark).text('Date', left + 290, signatureY);
  doc.roundedRect(left + 290, signatureY + 16, 120, 24, 5).lineWidth(0.8).strokeColor(colors.line).stroke();
  doc.font('Helvetica').fontSize(9).fillColor(colors.placeholder).text('DD / MM / YYYY', left + 298, signatureY + 24);

  doc
    .font('Helvetica-Bold')
    .fontSize(9)
    .fillColor(colors.accent)
    .text('Submit completed form to: info@hope4dliving.org', left, footerY + 126);
  doc
    .font('Helvetica')
    .fontSize(8)
    .fillColor('#64748b')
    .text('Keep a copy for your records before submission.', left, footerY + 142);
}

drawHeader();
drawPageTitle('Applicant Information', 'Please complete all fields clearly and attach the required documents.');

const top = 170;
const rowGap = 52;

drawField('Full Name', 'Surname first, then other names', left, top, contentWidth);
drawField('Date of Birth', 'DD / MM / YYYY', left, top + rowGap, halfWidth);
drawField('Gender', 'Male / Female', left + halfWidth + gutter, top + rowGap, halfWidth);
drawField('Home Address', 'Street, city, state', left, top + rowGap * 2, contentWidth);
drawField('Phone Number', '+234', left, top + rowGap * 3, halfWidth);
drawField('Email Address', 'example@email.com', left + halfWidth + gutter, top + rowGap * 3, halfWidth);
drawField('Church / Ministry', 'Local assembly or ministry name', left, top + rowGap * 4, contentWidth);
drawField('School Name', 'Current or prospective institution', left, top + rowGap * 5, contentWidth);
drawField('Course / Program', 'Study area or course title', left, top + rowGap * 6, halfWidth);
drawField('Current Level / Class', 'JSS / SS / ND / HND / Degree / Other', left + halfWidth + gutter, top + rowGap * 6, halfWidth);

doc.addPage();
drawHeader();
drawPageTitle('Scholarship Details', 'Tell us what support you need and how it will help you.');

const detailTop = 170;
drawField('Purpose of Scholarship', 'Tuition / books / vocational support / other', left, detailTop, contentWidth);
drawTextArea('Brief Statement of Need', 'Explain your need and how support will help you.', left, detailTop + 52, contentWidth, 96);
drawTextArea('Academic or Ministry Goals', 'Describe your plans after receiving support.', left, detailTop + 170, contentWidth, 96);

doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.dark).text('Required Documents Attached', left, detailTop + 288);
doc.moveTo(left, detailTop + 304).lineTo(left + contentWidth, detailTop + 304).lineWidth(0.8).strokeColor(colors.line).stroke();

drawCheckbox('Admission letter or school ID', left, detailTop + 320);
drawCheckbox('Last term / semester result', left + 220, detailTop + 320);
drawCheckbox('Passport photograph', left, detailTop + 344);
drawCheckbox('Recommendation letter', left + 220, detailTop + 344);
drawCheckbox('Any other supporting document', left, detailTop + 368);

drawSubmissionNote();

doc.end();

stream.on('finish', () => {
  process.stdout.write(`Created ${outputPath}\n`);
});
