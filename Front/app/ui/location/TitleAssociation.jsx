'use client';

const TitleAssociation = ({ title, onClick }) => {
  return (
    <h2 className="text-xl font-bold cursor-pointer" onClick={onClick}>
      {title}
    </h2>
  );
};

export default TitleAssociation;
