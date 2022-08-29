import BilingualTypography from "./BilingualTypography";
import Typography from "./Typography";

const Content = ({ isInEnglish }: { isInEnglish: boolean }) => (
  <div
    style={{
      paddingLeft: '25px',
      paddingRight: '25px',
    }}
  >
    <BilingualTypography
      size={"huge"}
      germanText={"Max Schnupp - Voll Stack Entwickler"}
      englishText={"Max Schnupp - Full Stack Developer"}
      isInEnglish={isInEnglish}
    />
    <BilingualTypography
      size={"big"}
      germanText={"Ich bin ein"}
      englishText={"I am a"}
      isInEnglish={isInEnglish}
    />
    <BilingualTypography
      size={"medium"}
      englishText={`something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english.`}
      germanText={`irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.`}
      isInEnglish={isInEnglish}
    />
    <BilingualTypography
      size={"big"}
      germanText={"USW USW"}
      englishText={"Etc Etc"}
      isInEnglish={isInEnglish}
    />
    <BilingualTypography
      size={"medium"}
      englishText={`something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english.`}
      germanText={`irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.`}
      isInEnglish={isInEnglish}
    />
    <BilingualTypography
      size={"big"}
      germanText={"USW USW"}
      englishText={"Etc Etc"}
      isInEnglish={isInEnglish}
    />
    <BilingualTypography
      size={"medium"}
      englishText={`something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english. something in english, something else in english,
    something in english, another thing in english.`}
      germanText={`irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.
    irgendwas auf deutsch, noch irgendwas auf deutsch und noch mehr, was auf deutsch ist.`}
      isInEnglish={isInEnglish}
    />
  </div>
);

export default Content;
