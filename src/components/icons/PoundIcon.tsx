interface PoundIconProps extends React.SVGProps<SVGSVGElement> {
  otherFill: string;
}

const PoundIcon: React.FC<PoundIconProps> = ({ otherFill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20px"
    height="50px"
    {...props}>
    <circle cx="12" cy="12" r="10" fill={props.fill} />
    <path
      d="M15,15H10.58a4.15,4.15,0,0,0,.25-2H13a1,1,0,0,0,0-2H10.22A3.81,3.81,0,0,1,10,9.74C10,9.33,10.2,8,12,8h0a2.63,2.63,0,0,1,2.13,1.31,1,1,0,0,0,1.72-1A4.63,4.63,0,0,0,12,6h0A3.75,3.75,0,0,0,8,9.73,5.27,5.27,0,0,0,8.16,11H8a1,1,0,0,0,0,2h.8a3.44,3.44,0,0,1-.65,2.54,1,1,0,0,0,0,1A1,1,0,0,0,9,17H9l6,0a1,1,0,0,0,0-2Z"
      fill={otherFill}
    />
  </svg>
);

export default PoundIcon;
