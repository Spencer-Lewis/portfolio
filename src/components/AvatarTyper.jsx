import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { TypeAnimation } from 'react-type-animation';
import avatar from "../assets/portrait.jpg";
import { keyframes } from '@mui/system';

const growAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const AvatarTyper = () => (
    <Box className="text-center mt-10 mb-4 md:mb-10"> {/* Updated margin */}
        <Grid container justifyContent="center">
            <Avatar
                src={avatar}
                alt="Spencer Lewis"
                sx={{
                    width: { xs: 120, md: 170 }, // Adjusted width for mobile and desktop
                    height: { xs: 140, md: 190 }, // Adjusted height for mobile and desktop
                    animation: `${growAnimation} 0.5s ease-in-out`,
                }}
            />
        </Grid>
        <div className=""> {/* Wrapped in a div to avoid Typography overriding styles */}
            <Typography variant="h4">
                <TypeAnimation sequence={["Spencer Lewis"]} typeSpeed={30} cursor={false} />
            </Typography>

            <Typography variant="h5">
                <TypeAnimation
                    sequence={[
                        "Frontend Developer",
                        1000,
                        "Backend Developer",
                        1000,
                        "Problem Solver",
                        1000
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: { xs: '1.5em', md: '2em' }, display: 'inline-block' }}
                    repeat={Infinity}
                />
            </Typography>
        </div>
    </Box>
);

export default AvatarTyper;
