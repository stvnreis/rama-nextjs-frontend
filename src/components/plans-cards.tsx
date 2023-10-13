import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { CheckCircle2 } from "lucide-react";

export interface PlansCardProps {
  title: string;
  name: string;
  description: string;
  message: string;
  list: string[];
  value: number;
}

export function PlansCards({ name, description, list, title, message, value }: PlansCardProps) {
  return (
    <Card className="flex flex-col min-w-xs w-60 max-w-xs h-80" isHoverable>
      <CardHeader className="flex flex-col gap-2 items-start" >
        <label className="text-sm font-semibold">{name}</label>
        <div className="text-2xl font-bold">
          R${value}
          <span className="text-primary">/mes</span>
        </div>
      </CardHeader>
      <CardBody className="flex gap-4">
        <span className="text-sm font-semibold">{title}</span>
        <div className="mb-3">
          <ul>
            {list.map((item, index) => {
              return (
                <li key={index} className="flex flex-col text-xs">
                  <div className="flex justify-start items-center">
                    <div className="w-3 h-3 flex items-center">
                      <CheckCircle2 size={18}/>
                    </div>
                    <span className="pl-4 dark:text-zinc-400 text-zinc-600">{item}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mt-auto flex justify-center">
          <a href={`https://wa.me/18997468004?text=${encodeURI(message)}`} target="_blank">
            <Button color="primary" variant="ghost" radius="full">
              Saiba Mais
            </Button>
          </a>
        </div>
      </CardBody>
    </Card>
  )
}