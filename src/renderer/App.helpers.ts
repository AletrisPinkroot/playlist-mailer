export default (input: any[]) => {
  console.log(input);
  if (input.length !== 1) {
    let genreList: string[] = [];
    input.forEach((email: any) => {
      //email = object of email
      const genres = email['Genre'].split(' / ');
      genres.forEach((genre: string) => {
        if (!genreList.includes(genre)) {
          genreList.push(genre);
        }
      });
    });
    return genreList;
  }
  return [];
};
