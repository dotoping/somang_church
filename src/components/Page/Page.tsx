import { styled } from '@mui/material/styles';

import { Toolbar } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';

const PageContainer = styled(Box)({
   minHeight: '100vh',
   display: 'flex',
   flexDirection: 'column',
   flex: 1,
   backgroundColor: '#fafafa'
})


const Page = (props: PageProps) => {
   const { withToolbar, children, ...boxProps } = props;
   
   return (
      <PageContainer {...boxProps}>
         {withToolbar && <Toolbar />}
         {children}
      </PageContainer>
   )
}

interface PageProps extends BoxProps { withToolbar?: boolean }

export default Page;