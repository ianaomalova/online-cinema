import {FC} from 'react';
import {TypeMaterialIconName} from '@/shared/types/icon.types';
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: FC<{name: TypeMaterialIconName}> = ({name}) => {
  const IconComponent = MaterialIcons[name]

  // @ts-ignore
  return <IconComponent /> || <MaterialIcons.MdDragIndicator />
};

export default MaterialIcon;
