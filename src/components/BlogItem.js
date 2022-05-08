import { Link } from 'react-router-dom'
import './BlogItem.css'

function BlogItem (props) {
  return (
    <div className='blog-item'>
      <h2><Link to={`/blog/${props.id}`}>题目</Link></h2>
      <p>
        <span>2022-05-01</span>
        <span className='tag'><Link to={`/tag/${props.tag}`}>{props.tag}</Link></span>
      </p>
      <p>太内约到西众织受做空给亲八求议究但。己分取是本整共转划断知广件。四易步传市严华精料活各按。由府是系究四育除十战们斯具带必。代义样效界开特价到造少新造产划数指原。五不通么会种阶列带从办界参接。二精各题半理给向层条研何况观。单着代使通群保派便书结该没指划。种处多具总价种研并选收江重满量。证格示约小各物格很许公别化。院最度集意按维色团利种体解消出列。难织即白书走也我号团已连强五。道白低外世广叫五交本许心利调属位。复团况今速目即加及所等局分米治指二铁。量气际界样接这响争类则产比。往海意程根起复造千原制量就了军义。业行片农建影了果导子从管传采真。只技影类取断导局感商型可火想。先便条学说设率知备统细断造华。工线例五反千等对验候数能满集。</p>
    </div>
  )
}

export default BlogItem
