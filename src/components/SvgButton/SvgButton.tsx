import { HandySvg } from 'handy-svg';
/**CONSTANTS */
import { svgDefaultSize } from '../../constants/applicationConstants';
import { BoardCardBtnStyled } from './SvgButton.styled';
import CSS from 'csstype';

const SvgButton = ({
  color,
  icon,
  size,
  stylish,
}: {
  color: string;
  icon: string;
  size?: number;
  stylish?: CSS.Properties;
}) => {
  size = size ?? svgDefaultSize;
  return (
    <BoardCardBtnStyled color={color} style={stylish}>
      <HandySvg src={icon} width={String(size)} height={String(size)} />
    </BoardCardBtnStyled>
  );
};

export default SvgButton;