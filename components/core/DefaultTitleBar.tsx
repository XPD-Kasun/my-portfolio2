import { useRouter } from "next/router";
import { IoHomeOutline } from "react-icons/io5";
import {
       BoxTitleBar,
       ToolDock,
       HomeBtn,
} from '../blocks/mainBox/mainBox.components';


function DefaultTitleBar() {

       let router = useRouter();

       const onHomeClick = () => {
              router.push("/");
       };


       return (
              <BoxTitleBar>
                     <ToolDock>
                            <HomeBtn onClick={onHomeClick}>
                                   <IoHomeOutline color="#00fa00"></IoHomeOutline>
                            </HomeBtn>
                     </ToolDock>
              </BoxTitleBar>
       )
}

export default DefaultTitleBar;