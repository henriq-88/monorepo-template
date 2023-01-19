import { cva, VariantProps } from "class-variance-authority";

const container = cva(["rounded-xl", "bg-[#180236]", "p-24"], {
  variants: {
    size: {
      small: [],
      large: [],
    },
  },
});

const heading1 = cva(
  ["font-extrabold", "tracking-tight", "sm:text-[5rem]", "text-center"],
  {
    variants: {
      size: {
        small: ["text-2xl"],
        large: ["text-5xl"],
      },
    },
  },
);

const heading1Span = cva(["text-orange-500"], {
  variants: {
    size: {
      small: [],
      large: [],
    },
  },
});

const paragraph = cva(["text-white", "text-center"], {
  variants: {
    size: {
      small: [],
      large: [],
    },
  },
});

interface ErrorProps extends VariantProps<typeof container> {
  message: string;
}

const NotFoundError: React.FC<ErrorProps> = (props) => {
  const { message, ...rest } = props;
  return (
    <div className={container(rest)}>
      <h1 className={heading1(rest)}>
        <span className={heading1Span(rest)}>404</span>
      </h1>
      <p className={paragraph(rest)}>{message}</p>
    </div>
  );
};

export default NotFoundError;
