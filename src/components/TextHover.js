import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

// Skapa en anpassad Tooltip-komponent med konsekvent typografi
const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    '& .MuiTooltip-tooltip': {
        fontSize: 'inherit',
        fontFamily: 'var(--font-primary)',
        padding: '8px 12px'
    }
});

const TextHover = ({ text, children }) => {
    return (
        <StyledTooltip title={text} arrow>
            <span style={{ cursor: 'pointer' }}>
                {children || 'Hover over me'}
            </span>
        </StyledTooltip>
    );
};

export default TextHover;
