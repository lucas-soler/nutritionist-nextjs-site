interface DescriptionProps {
  description: string;
}

async function Description({ description }: DescriptionProps) {
  return <p>{description}</p>;
}

export default Description;
