import 'styles/global.scss';
import 'styles/reset.scss';
import { CustomButton } from 'ui/button';
import { CustomInput } from 'ui/input';
import { Typography } from 'ui/typography';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', gap: 5 }}>
        <CustomButton>
          <Typography color="white">Button</Typography>
        </CustomButton>
        <CustomButton variant="outline">
          <Typography>Button</Typography>
        </CustomButton>
      </div>

      <CustomInput type="text" />

      <Typography as="h1">some h1</Typography>
      <Typography as="h2">some h2</Typography>
      <Typography as="h3">some h3</Typography>
      <Typography as="h4">some h4</Typography>
      <Typography as="blockquote">some blockquote</Typography>
      <Typography as="inline-code">some inline-code</Typography>
      <Typography as="lead">some lead</Typography>
      <Typography as="p">some p</Typography>
      <Typography as="ulList">
        <Typography as="list_item">list_item</Typography>
        <Typography as="list_item">list_item</Typography>
        <Typography as="list_item">list_item</Typography>
      </Typography>
      <Typography as="olList">
        <Typography as="list_item">list_item</Typography>
        <Typography as="list_item">list_item</Typography>
        <Typography as="list_item">list_item</Typography>
      </Typography>
    </div>
  );
}

export default App;
