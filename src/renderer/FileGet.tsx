import { useEffect } from 'react';

export default ({
  emails,
  setEmails,
}: {
  emails: any;
  setEmails: (a: any[]) => void;
}) => {
  const parseEmails = async (csv: File) => {
    const rawText: string = await csv.text();
    const lines: string[] = rawText.split('\r\n');

    const headers: string[] = lines[0].split(',');
    const emails: any[] = lines.slice(1).map((line: string) => {
      const values: string[] = line.split(',');

      const email: any = {};
      headers.forEach((header: string, i: number) => {
        email[header] = values[i];
      });

      return email;
    });

    return emails;
  };
  useEffect(() => {
    console.log(emails);
  }, [emails]);
  return (
    <div>
      <input
        type="file"
        name="emails"
        id="emails"
        accept=".csv"
        onChange={(e) => {
          const emailFile = e.target.files![0];
          parseEmails(emailFile)
            .then((e) => {
              return e;
            })
            .then((e) => {
              setEmails(e);
            });
        }}
      />
    </div>
  );
};
