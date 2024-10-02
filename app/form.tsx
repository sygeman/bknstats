'use client';

import {
  Blockquote,
  Button,
  Container,
  Divider,
  Fieldset,
  Group,
  NumberInput,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      code: '',
      baseLevel: 20,
      marches: 3,
      squadSize: 100000,
      groupSize: 500000,
      //fighters
      ft7: 0,
      ft8: 0,
      ft9: 0,
      ft10: 0,
      ft11: 0,
      //shooters
      st7: 0,
      st8: 0,
      st9: 0,
      st10: 0,
      st11: 0,
      //riders
      rt7: 0,
      rt8: 0,
      rt9: 0,
      rt10: 0,
      rt11: 0,
    },
  });

  return (
    <Container size="xs" py={40}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Blockquote color="red" mb={10}>
          <Text size="sm">Форма в разработке, заполнять пока не нужно</Text>
        </Blockquote>

        <TextInput
          label="Код"
          description="Код который вам выдали"
          key={form.key('code')}
          {...form.getInputProps('code')}
        />

        <Divider my="md" label="Общие данные" labelPosition="center" />
        <Blockquote mb={10}>
          <Text size="sm">
            Как найти информацию о размере отряда, групповой атаке, лимите марша? Жмем на свой
            профиль (там где обычно видно ваше снаряжене), снизу в меню жмем{' '}
            <strong>Усиления</strong>, раскрываем <strong>Усиления Марша</strong> и все цифры перед
            вами
          </Text>
        </Blockquote>

        <NumberInput
          label="ШК"
          description="Уровень вашей базы, например 25"
          key={form.key('baseLevel')}
          min={10}
          max={43}
          {...form.getInputProps('baseLevel')}
        />

        <NumberInput
          label="Размер отряда"
          description="Это количество войск, которое вы например отправляете на логово"
          key={form.key('squadSize')}
          min={1}
          {...form.getInputProps('squadSize')}
        />

        <NumberInput
          label="Лимит марша"
          description="От 1 до 5"
          key={form.key('marches')}
          min={1}
          max={5}
          {...form.getInputProps('marches')}
        />

        <NumberInput
          label="Размер групповой атаки"
          description="Размер групповой атаки"
          min={100000}
          max={3000000}
          key={form.key('groupSize')}
          {...form.getInputProps('groupSize')}
        />

        <Divider my="md" label="Войска" labelPosition="center" />
        <Blockquote mb={10}>
          <Text size="sm">
            Информацию о ваших войсках вы найдите на базе, нажав на <b>Плац</b>, он находится правее{' '}
            <b>Стены</b>
          </Text>
        </Blockquote>

        <Fieldset legend="Бойцы" mt={10}>
          <Switch
            label="Бойцы мой основной вид войск"
            description="Вы преимущественно качаете этот вид войск, повышаете чипы, модули и т.д."
            mb={10}
          />
          {[7, 8, 9, 10, 11].map((t) => (
            <NumberInput
              key={form.key(`ft${t}`)}
              label={`T${t}`}
              min={0}
              max={10000000}
              {...form.getInputProps(`ft${t}`)}
            />
          ))}
        </Fieldset>
        <Fieldset legend="Стрелки" mt={10}>
          <Switch
            label="Стрелки мой основной вид войск"
            description="Вы преимущественно качаете этот вид войск, повышаете чипы, модули и т.д."
            mb={10}
          />
          {[7, 8, 9, 10, 11].map((t) => (
            <NumberInput
              key={form.key(`st${t}`)}
              label={`T${t}`}
              min={0}
              max={10000000}
              {...form.getInputProps(`st${t}`)}
            />
          ))}
        </Fieldset>
        <Fieldset legend="Наездники" mt={10}>
          <Switch
            label="Наездники мой основной вид войск"
            description="Вы преимущественно качаете этот вид войск, повышаете чипы, модули и т.д."
            mb={10}
          />
          {[7, 8, 9, 10, 11].map((t) => (
            <NumberInput
              key={form.key(`rt${t}`)}
              label={`T${t}`}
              min={0}
              max={10000000}
              {...form.getInputProps(`rt${t}`)}
            />
          ))}
        </Fieldset>

        <Group justify="flex-end" mt="md">
          <Button type="submit">Отправить</Button>
        </Group>
      </form>
    </Container>
  );
}
