import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, 'public', 'resources');
const logoPath = path.join(projectRoot, 'public', 'logo', 'logo1.png');

fs.mkdirSync(outputDir, { recursive: true });

const colors = {
  brand: '#1d4ed8',
  brandSoft: '#eff6ff',
  dark: '#0f172a',
  muted: '#475569',
  line: '#cbd5e1',
};

const documents = [
  {
    fileName: 'Hope4DLiving_Prayer_Guide_June_2026.pdf',
    eyebrow: 'Prayer Resource',
    title: 'June 2026 Prayer Guide',
    subtitle: 'Focused prayers for the next phase of Hope4DLiving outreach.',
    sections: [
      {
        heading: 'Prayer Points',
        bullets: [
          'Pray for open hearts and genuine salvation at every crusade and community outreach.',
          'Pray for strength, wisdom, and protection for volunteers, trustees, and ministry leaders.',
          'Pray for healing, provision, and dignity for families receiving medical, food, and scholarship support.',
          'Pray for divine favor with local church partners, venues, and logistics planning for Enugu 2027.',
        ],
      },
      {
        heading: 'Suggested Rhythm',
        bullets: [
          'Set aside one focused time each week for Hope4DLiving intercession.',
          'Pray with your family or fellowship group for gospel fruit that lasts.',
          'Send a short encouragement note after praying so the team can stay strengthened.',
        ],
      },
    ],
    footer: 'For prayer feedback or testimonies, write to prayer@hope4dliving.org',
  },
  {
    fileName: 'Hope4DLiving_Enugu_Crusade_Prep_Checklist.pdf',
    eyebrow: 'Outreach Resource',
    title: 'Enugu Crusade Preparation Checklist',
    subtitle: 'A simple planning sheet for volunteers, churches, and logistics teams.',
    sections: [
      {
        heading: 'Before the Crusade',
        bullets: [
          'Confirm the outreach date, venue details, and local coordination contacts.',
          'Assign teams for prayer, publicity, ushers, medical support, and follow-up.',
          'Prepare transport, signage, sound, chairs, and basic welfare support for volunteers.',
          'Mobilize partner churches to announce the meeting and pray consistently.',
        ],
      },
      {
        heading: 'On the Ground',
        bullets: [
          'Keep welcome, counseling, and altar-response areas clearly organized.',
          'Document attendance, testimonies, urgent needs, and follow-up contacts carefully.',
          'Ensure safety, cleanliness, and respectful treatment for every attendee.',
        ],
      },
    ],
    footer: 'Questions about volunteering? Contact info@hope4dliving.org',
  },
  {
    fileName: 'Hope4DLiving_Ministry_Partner_Brief_June_2026.pdf',
    eyebrow: 'Partner Resource',
    title: 'Ministry Partner Brief',
    subtitle: 'A snapshot of current ministry priorities and partnership opportunities.',
    sections: [
      {
        heading: 'Current Priorities',
        bullets: [
          'Prepare for the February 16–17, 2027 Enugu crusade with prayer and logistics support.',
          'Sustain educational support through scholarship-focused giving and applicant care.',
          'Strengthen practical compassion work through food relief, medical outreach, and shelter response.',
        ],
      },
      {
        heading: 'How Partners Can Help',
        bullets: [
          'Give financially toward outreach operations and compassion response.',
          'Volunteer skills in media, logistics, health care, administration, or prayer coordination.',
          'Connect Hope4DLiving with churches, sponsors, and communities that need ministry support.',
        ],
      },
    ],
    footer: 'For partnership conversations, write to contact@hope4dliving.org',
  },
  {
    fileName: 'Hope4DLiving_Scholarship_Application_Guide.pdf',
    eyebrow: 'Application Guide',
    title: 'Scholarship Application Guide',
    subtitle: 'A step-by-step helper for students and families applying for support.',
    sections: [
      {
        heading: 'What to Prepare',
        bullets: [
          'The completed Hope4DLiving scholarship form with clear and accurate details.',
          'School information, recent academic record if available, and current contact information.',
          'A brief explanation of your need and any supporting documents that strengthen your application.',
        ],
      },
      {
        heading: 'Submission Guidance',
        bullets: [
          'Read through the full form before you begin so every section is completed properly.',
          'Use a working phone number and email address so the team can follow up if needed.',
          'Submit the completed form to info@hope4dliving.org and keep a copy for your records.',
          'Remember that review depends on eligibility, completeness, and currently available funding.',
        ],
      },
    ],
    footer: 'Download the official form at hope4dliving.org/resources',
  },
];

function createDocument(config) {
  const filePath = path.join(outputDir, config.fileName);
  const doc = new PDFDocument({ size: 'A4', margin: 48, pdfVersion: '1.4' });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 48, 34, { fit: [54, 54] });
  }

  doc.roundedRect(116, 34, 430, 58, 14).fillColor(colors.brandSoft).fill();
  doc.font('Helvetica-Bold').fontSize(11).fillColor(colors.brand).text(config.eyebrow.toUpperCase(), 132, 45);
  doc.font('Helvetica-Bold').fontSize(18).fillColor(colors.dark).text(config.title, 132, 60, { width: 390 });
  doc.font('Helvetica').fontSize(9).fillColor(colors.muted).text(config.subtitle, 132, 83, { width: 390 });

  let cursorY = 126;
  doc.moveTo(48, cursorY).lineTo(547, cursorY).lineWidth(1).strokeColor(colors.line).stroke();
  cursorY += 22;

  config.sections.forEach((section) => {
    doc.font('Helvetica-Bold').fontSize(12).fillColor(colors.dark).text(section.heading, 48, cursorY);
    cursorY += 22;

    section.bullets.forEach((bullet) => {
      doc.circle(54, cursorY + 6, 2.5).fillColor(colors.brand).fill();
      doc.font('Helvetica').fontSize(10).fillColor(colors.muted).text(bullet, 66, cursorY, {
        width: 470,
        lineGap: 3,
      });
      cursorY = doc.y + 12;
    });

    cursorY += 6;
  });

  doc.roundedRect(48, 716, 499, 46, 12).fillColor(colors.brandSoft).fill();
  doc.font('Helvetica-Bold').fontSize(9).fillColor(colors.brand).text('Hope4DLiving Global Outreach', 64, 730);
  doc.font('Helvetica').fontSize(9).fillColor(colors.muted).text(config.footer, 64, 744, { width: 450 });

  doc.end();

  return new Promise((resolve) => {
    stream.on('finish', () => resolve(filePath));
  });
}

const created = [];
for (const item of documents) {
  const filePath = await createDocument(item);
  created.push(filePath);
}

process.stdout.write(`${created.map((filePath) => `Created ${filePath}`).join('\n')}\n`);
