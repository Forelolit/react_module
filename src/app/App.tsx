import './styles/global.scss';
import { CustomButton } from 'ui/button';
import { CustomInput } from 'ui/input';

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: 5 }}>
                <CustomButton>Button</CustomButton>
                <CustomButton variant="outline">Button</CustomButton>
            </div>
            <CustomInput type="text" />
        </div>
    );
}

export default App;
