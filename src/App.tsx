import { Button, Input, Badge, Select, Checkbox, Avatar, SegmentedControl, Alert, Toggle, RadioButton} from './UI'
import { ProductCard } from './components'
import './App.module.scss'

function AppComponent() {
  return (
    <div className="app">
      <h1>UI Components</h1>
      <p className="subtitle">UI компоненты, которые у меня есть</p>

      {/* ============ BUTTONS ============ */}

      <section className="section">
        <h2>Primary — Sharp</h2>
        <div className="row">
          <Button size="sm">Button</Button>
          <Button size="md">Button</Button>
          <Button size="lg">Button</Button>
          <Button size="xl">Button</Button>
          <Button size="2xl">Button</Button>
        </div>
      </section>

      <section className="section">
        <h2>Primary — Smooth</h2>
        <div className="row">
          <Button style="smooth" size="sm">Button</Button>
          <Button style="smooth" size="md">Button</Button>
          <Button style="smooth" size="lg">Button</Button>
          <Button style="smooth" size="xl">Button</Button>
          <Button style="smooth" size="2xl">Button</Button>
        </div>
      </section>

      <section className="section">
        <h2>Secondary Color — Sharp</h2>
        <div className="row">
          <Button variant="secondary" size="sm">Button</Button>
          <Button variant="secondary" size="md">Button</Button>
          <Button variant="secondary" size="lg">Button</Button>
          <Button variant="secondary" size="xl">Button</Button>
          <Button variant="secondary" size="2xl">Button</Button>
        </div>
      </section>

      <section className="section">
        <h2>Secondary Color — Smooth</h2>
        <div className="row">
          <Button variant="secondary" style="smooth" size="sm">Button</Button>
          <Button variant="secondary" style="smooth" size="md">Button</Button>
          <Button variant="secondary" style="smooth" size="lg">Button</Button>
          <Button variant="secondary" style="smooth" size="xl">Button</Button>
          <Button variant="secondary" style="smooth" size="2xl">Button</Button>
        </div>
      </section>

      <section className="section">
        <h2>Secondary Grey — Sharp</h2>
        <div className="row">
          <Button variant="secondaryGrey" size="sm">Button</Button>
          <Button variant="secondaryGrey" size="md">Button</Button>
          <Button variant="secondaryGrey" size="lg">Button</Button>
          <Button variant="secondaryGrey" size="xl">Button</Button>
          <Button variant="secondaryGrey" size="2xl">Button</Button>
        </div>
      </section>

      <section className="section">
        <h2>Secondary Grey — Smooth</h2>
        <div className="row">
          <Button variant="secondaryGrey" style="smooth" size="sm">Button</Button>
          <Button variant="secondaryGrey" style="smooth" size="md">Button</Button>
          <Button variant="secondaryGrey" style="smooth" size="lg">Button</Button>
          <Button variant="secondaryGrey" style="smooth" size="xl">Button</Button>
          <Button variant="secondaryGrey" style="smooth" size="2xl">Button</Button>
        </div>
      </section>

      <section className="section">
        <h2>Text Only — Sharp</h2>
        <div className="row">
          <Button variant="textOnly" size="sm">Button</Button>
          <Button variant="textOnly" size="md">Button</Button>
          <Button variant="textOnly" size="lg">Button</Button>
          <Button variant="textOnly" size="xl">Button</Button>
          <Button variant="textOnly" size="2xl">Button</Button>
        </div>
      </section>

      <section className="section">
        <h2>Text Only — Smooth</h2>
        <div className="row">
          <Button variant="textOnly" style="smooth" size="sm">Button</Button>
          <Button variant="textOnly" style="smooth" size="md">Button</Button>
          <Button variant="textOnly" style="smooth" size="lg">Button</Button>
          <Button variant="textOnly" style="smooth" size="xl">Button</Button>
          <Button variant="textOnly" style="smooth" size="2xl">Button</Button>
        </div>
      </section>

      <section className="section">
        <h2>Disabled States</h2>
        <div className="row">
          <Button disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="secondaryGrey" disabled>Grey</Button>
          <Button variant="textOnly" disabled>Text Only</Button>
        </div>
      </section>

      {/* ============ INPUTS ============ */}

      <section className="section">
        <h2>Input — Sharp</h2>
        <div className="input-grid">
          <Input label="Email" placeholder="hussain@finesse.com" helperText="Helping text for user" />
          <Input label="Email" placeholder="hussain@finesse.com" error="Helping text for user" variant="error" />
          <Input label="Email" placeholder="hussain@finesse.com" warning="Helping text for user" variant="warning" />
          <Input label="Email" placeholder="hussain@finesse.com" success="Helping text for user" variant="success" />
          <Input label="Email" placeholder="hussain@finesse.com" helperText="Helping text for user" disabled />
        </div>
      </section>

      <section className="section">
        <h2>Input — Smooth</h2>
        <div className="input-grid">
          <Input label="Email" placeholder="hussain@finesse.com" helperText="Helping text for user" style="smooth" />
          <Input label="Email" placeholder="hussain@finesse.com" error="Helping text for user" variant="error" style="smooth" />
          <Input label="Email" placeholder="hussain@finesse.com" warning="Helping text for user" variant="warning" style="smooth" />
          <Input label="Email" placeholder="hussain@finesse.com" success="Helping text for user" variant="success" style="smooth" />
          <Input label="Email" placeholder="hussain@finesse.com" helperText="Helping text for user" disabled style="smooth" />
        </div>
      </section>

      {/* ============ BADGES ============ */}

      <section className="section">
        <h2>Badge — Simple Sharp (скидки, статусы)</h2>
        <div className="row">
          <Badge size="sm">-20%</Badge>
          <Badge size="md">-20%</Badge>
          <Badge size="lg">-20%</Badge>
        </div>
        <div className="row" style={{ marginTop: '16px' }}>
          <Badge variant="error" size="sm">Ошибка</Badge>
          <Badge variant="error" size="md">Ошибка</Badge>
          <Badge variant="error" size="lg">Ошибка</Badge>
        </div>
        <div className="row" style={{ marginTop: '16px' }}>
          <Badge variant="warning" size="sm">Внимание</Badge>
          <Badge variant="warning" size="md">Внимание</Badge>
          <Badge variant="warning" size="lg">Внимание</Badge>
        </div>
        <div className="row" style={{ marginTop: '16px' }}>
          <Badge variant="success" size="sm">Доставлен</Badge>
          <Badge variant="success" size="md">Доставлен</Badge>
          <Badge variant="success" size="lg">Доставлен</Badge>
        </div>
      </section>

      <section className="section">
        <h2>Badge — Simple Smooth</h2>
        <div className="row">
          <Badge style="smooth" size="sm">-20%</Badge>
          <Badge style="smooth" size="md">-20%</Badge>
          <Badge style="smooth" size="lg">-20%</Badge>
        </div>
        <div className="row" style={{ marginTop: '16px' }}>
          <Badge variant="error" style="smooth" size="sm">Ошибка</Badge>
          <Badge variant="error" style="smooth" size="md">Ошибка</Badge>
          <Badge variant="error" style="smooth" size="lg">Ошибка</Badge>
        </div>
        <div className="row" style={{ marginTop: '16px' }}>
          <Badge variant="warning" style="smooth" size="sm">Внимание</Badge>
          <Badge variant="warning" style="smooth" size="md">Внимание</Badge>
          <Badge variant="warning" style="smooth" size="lg">Внимание</Badge>
        </div>
        <div className="row" style={{ marginTop: '16px' }}>
          <Badge variant="success" style="smooth" size="sm">Доставлен</Badge>
          <Badge variant="success" style="smooth" size="md">Доставлен</Badge>
          <Badge variant="success" style="smooth" size="lg">Доставлен</Badge>
        </div>
      </section>

      <section className="section">
        <h2>Badge — Dot (индикаторы)</h2>
        <div className="row">
          <Badge type="dot" size="sm">Новинка</Badge>
          <Badge type="dot" size="md">Новинка</Badge>
          <Badge type="dot" size="lg">Новинка</Badge>
        </div>
        <div className="row" style={{ marginTop: '16px' }}>
          <Badge type="dot" variant="error" size="sm">Срочно</Badge>
          <Badge type="dot" variant="error" size="md">Срочно</Badge>
          <Badge type="dot" variant="error" size="lg">Срочно</Badge>
        </div>
      </section>

      <section className="section">
        <h2>Badge — Icons (фильтры с удалением)</h2>
        <div className="row">
          <Badge type="icons" size="sm" onClose={() => alert('удалено')}>Красный</Badge>
          <Badge type="icons" size="md" onClose={() => alert('удалено')}>Nike</Badge>
          <Badge type="icons" size="lg" onClose={() => alert('удалено')}>До 5000₽</Badge>
        </div>
        <div className="row" style={{ marginTop: '16px' }}>
          <Badge type="icons" variant="error" size="sm" onClose={() => alert('удалено')}>Ошибка</Badge>
          <Badge type="icons" variant="error" size="md" onClose={() => alert('удалено')}>Ошибка</Badge>
          <Badge type="icons" variant="error" size="lg" onClose={() => alert('удалено')}>Ошибка</Badge>
        </div>
      </section>

      {/* ============ PRODUCT CARD ============ */}
      <section className="section">
        <h2>Product Card — Compact</h2>
        <div className="product-grid">
          <ProductCard
            image="https://placehold.co/400x400/FF6B6B/FFFFFF?text=Nike"
            title="Nike Air Max"
            price={129.00}
            oldPrice={159.00}
            discount={20}
            rating={4.8}
            reviews={39}
            variant="compact"
          />
          <ProductCard
            image="https://placehold.co/400x400/4ECDC4/FFFFFF?text=Puma"
            title="Puma Running"
            price={89.00}
            rating={4.5}
            reviews={24}
            variant="compact"
          />
          <ProductCard
            image="https://placehold.co/400x400/45B7D1/FFFFFF?text=Adidas"
            title="Adidas Ultraboost"
            price={149.00}
            oldPrice={179.00}
            discount={15}
            rating={4.9}
            reviews={56}
            variant="compact"
          />
          <ProductCard
            image="https://placehold.co/400x400/96CEB4/FFFFFF?text=T-Shirt"
            title="Cotton T-Shirt"
            price={29.00}
            rating={4.7}
            reviews={128}
            variant="compact"
          />
        </div>
      </section>

      {/* ============ SELECT ============ */}
      <section className="section">
        <h2>Select — Sizes</h2>
        <div className="input-grid">
          <Select
            label="Small"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
            ]}
            size="sm"
            caption="Small select for compact forms"
          />
          <Select
            label="Medium (default)"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
            ]}
            size="md"
            caption="Standard select for most cases"
          />
          <Select
            label="Large"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
            ]}
            size="lg"
            caption="Large select for prominent display"
          />
        </div>
      </section>

      <section className="section">
        <h2>Select — Statuses</h2>
        <div className="input-grid">
          <Select
            label="Info"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ]}
            status="info"
            caption="Info status"
          />
          <Select
            label="Success"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ]}
            status="success"
            caption="Success status"
          />
          <Select
            label="Warning"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ]}
            status="warning"
            caption="Warning status"
          />
          <Select
            label="Danger"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ]}
            status="danger"
            caption="Danger status"
          />
        </div>
      </section>

      <section className="section">
        <h2>Select — Required & Disabled</h2>
        <div className="input-grid">
          <Select
            label="Required field"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ]}
            required
            caption="This field is required"
          />
          <Select
            label="Disabled"
            placeholder="Choose option"
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
            ]}
            disabled
            caption="This field is disabled"
          />
        </div>
      </section>

    <section className="section">
      <h2>Select — For Shop (сортировка)</h2>
      <div className="input-grid">
        <Select
          label="Сортировка"
          placeholder="По умолчанию"
          options={[
            { value: 'price_asc', label: 'По возрастанию цены' },
            { value: 'price_desc', label: 'По убыванию цены' },
            { value: 'rating', label: 'По рейтингу' },
            { value: 'popular', label: 'По популярности' },
          ]}
          size="md"
          caption="Сортировка товаров"
        />
        <Select
          label="Категория"
          placeholder="Все категории"
          options={[
            { value: 'shoes', label: 'Обувь' },
            { value: 'clothes', label: 'Одежда' },
            { value: 'accessories', label: 'Аксессуары' },
          ]}
          size="md"
          caption="Фильтр по категории"
        />
      </div>
    </section>

    {/* ============ CHECKBOX ============ */}
    <section className="section">
      <h2>Checkbox — Sizes</h2>
      <div className="checkbox-grid">
        <Checkbox label="Small" size="sm" />
        <Checkbox label="Medium" size="md" />
        <Checkbox label="Large" size="lg" />
      </div>
    </section>

    <section className="section">
      <h2>Checkbox — Checked States</h2>
      <div className="checkbox-grid">
        <Checkbox label="Unchecked Small" size="sm" />
        <Checkbox label="Checked Small" size="sm" checked />
        <Checkbox label="Unchecked Medium" size="md" />
        <Checkbox label="Checked Medium" size="md" checked />
        <Checkbox label="Unchecked Large" size="lg" />
        <Checkbox label="Checked Large" size="lg" checked />
      </div>
    </section>

    <section className="section">
      <h2>Checkbox — Disabled</h2>
      <div className="checkbox-grid">
        <Checkbox label="Disabled Unchecked" disabled />
        <Checkbox label="Disabled Checked" checked disabled />
      </div>
    </section>

    <section className="section">
      <h2>Checkbox — For Shop Filters (категории)</h2>
      <div className="checkbox-grid">
        <Checkbox label="Обувь" />
        <Checkbox label="Одежда" checked />
        <Checkbox label="Аксессуары" />
        <Checkbox label="Спортивная одежда" />
        <Checkbox label="Кроссовки" checked />
        <Checkbox label="Кеды" />
      </div>
    </section>

    {/* ============ AVATAR ============ */}
    <section className="section">
      <h2>Avatar — Image (все размеры)</h2>
      <div className="avatar-grid">
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="xs" />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="sm" />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="md" />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="lg" />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="xl" />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="2xl" />
      </div>
    </section>

    <section className="section">
      <h2>Avatar — Text (инициалы)</h2>
      <div className="avatar-grid">
        <Avatar type="text" initials="AB" size="xs" />
        <Avatar type="text" initials="AB" size="sm" />
        <Avatar type="text" initials="AB" size="md" />
        <Avatar type="text" initials="AB" size="lg" />
        <Avatar type="text" initials="AB" size="xl" />
        <Avatar type="text" initials="AB" size="2xl" />
      </div>
    </section>

    <section className="section">
      <h2>Avatar — Online Indicator</h2>
      <div className="avatar-grid">
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="sm" indicator="online" />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="md" indicator="online" />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="lg" indicator="online" />
        <Avatar type="text" initials="AB" size="sm" indicator="online" />
        <Avatar type="text" initials="AB" size="md" indicator="online" />
        <Avatar type="text" initials="AB" size="lg" indicator="online" />
      </div>
    </section>

    <section className="section">
      <h2>Avatar — Number Indicator (уведомления)</h2>
      <div className="avatar-grid">
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="sm" indicator="number" number={3} />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="md" indicator="number" number={12} />
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="lg" indicator="number" number={150} />
        <Avatar type="text" initials="AB" size="sm" indicator="number" number={5} />
        <Avatar type="text" initials="AB" size="md" indicator="number" number={99} />
      </div>
    </section>

    <section className="section">
      <h2>Avatar — For Shop (профиль пользователя)</h2>
      <div className="avatar-grid">
        <Avatar type="image" src="https://placehold.co/80x80/333/FFF?text=U" size="md" indicator="online" />
        <Avatar type="text" initials="ЕК" size="md" indicator="number" number={3} />
      </div>
    </section>

    {/* ============ SEGMENTED CONTROL ============ */}
    <section className="section">
      <h2>Segmented Control — Only Text (2 опции)</h2>
      <div className="row" style={{ gap: '24px' }}>
        <SegmentedControl
          options={[
            { value: 'first', label: 'First' },
            { value: 'last', label: 'Last' },
          ]}
          style="smooth"
        />
        <SegmentedControl
          options={[
            { value: 'first', label: 'First' },
            { value: 'last', label: 'Last' },
          ]}
          style="sharp"
        />
      </div>
    </section>

    <section className="section">
      <h2>Segmented Control — Only Text (3 опции)</h2>
      <div className="row" style={{ gap: '24px' }}>
        <SegmentedControl
          options={[
            { value: 'first', label: 'First' },
            { value: 'second', label: 'Second' },
            { value: 'last', label: 'Last' },
          ]}
          style="smooth"
        />
        <SegmentedControl
          options={[
            { value: 'first', label: 'First' },
            { value: 'second', label: 'Second' },
            { value: 'last', label: 'Last' },
          ]}
          style="sharp"
        />
      </div>
    </section>

    <section className="section">
      <h2>Segmented Control — Text & Icon</h2>
      <div className="row" style={{ gap: '24px' }}>
        <SegmentedControl
          options={[
            { value: 'first', label: 'First', icon: '✓' },
            { value: 'last', label: 'Last', icon: '✓' },
          ]}
          showIcon
          style="smooth"
        />
        <SegmentedControl
          options={[
            { value: 'first', label: 'First', icon: '✓' },
            { value: 'second', label: 'Second', icon: '✓' },
            { value: 'last', label: 'Last', icon: '✓' },
          ]}
          showIcon
          style="sharp"
        />
      </div>
    </section>

    <section className="section">
      <h2>Segmented Control — Only Icon</h2>
      <div className="row" style={{ gap: '24px' }}>
        <SegmentedControl
          options={[
            { value: 'prev', icon: '«' },
            { value: 'next', icon: '»' },
          ]}
          onlyIcon
          style="smooth"
        />
        <SegmentedControl
          options={[
            { value: 'check1', icon: '✓' },
            { value: 'check2', icon: '✓' },
            { value: 'check3', icon: '✓' },
          ]}
          onlyIcon
          style="sharp"
        />
      </div>
    </section>

    <section className="section">
      <h2>Segmented Control — For Shop (фильтры каталога)</h2>
      <div className="row" style={{ gap: '24px' }}>
        <SegmentedControl
          options={[
            { value: 'all', label: 'Все' },
            { value: 'shoes', label: 'Обувь' },
            { value: 'clothes', label: 'Одежда' },
            { value: 'accessories', label: 'Аксессуары' },
          ]}
          style="smooth"
        />
        <SegmentedControl
          options={[
            { value: 'grid', label: 'Сетка', icon: '⊞' },
            { value: 'list', label: 'Список', icon: '☰' },
          ]}
          showIcon
          style="sharp"
        />
      </div>
    </section>

    <section className="section">
      <h2>Segmented Control — Disabled</h2>
      <div className="row" style={{ gap: '24px' }}>
        <SegmentedControl
          options={[
            { value: 'first', label: 'First' },
            { value: 'last', label: 'Last' },
          ]}
          disabled
          style="smooth"
        />
        <SegmentedControl
          options={[
            { value: 'first', label: 'First' },
            { value: 'second', label: 'Second' },
            { value: 'last', label: 'Last' },
          ]}
          disabled
          style="sharp"
        />
      </div>
    </section>
    
    {/* ============ SEGMENTED CONTROL ============ */}
    <section className="section">
      <h2>Alert — Sharp (Desktop)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about. Describe what has happened and what changed for the user."
          linkText="Learn More"
          variant="info"
          style="sharp"
          layout="desktop"
          onClose={() => console.log('Closed')}
        />
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about. Describe what has happened and what changed for the user."
          linkText="Learn More"
          variant="error"
          style="sharp"
          layout="desktop"
        />
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about. Describe what has happened and what changed for the user."
          linkText="Learn More"
          variant="warning"
          style="sharp"
          layout="desktop"
        />
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about. Describe what has happened and what changed for the user."
          linkText="Learn More"
          variant="success"
          style="sharp"
          layout="desktop"
        />
      </div>
    </section>

    <section className="section">
      <h2>Alert — Smooth (Desktop)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about."
          linkText="Learn More"
          variant="info"
          style="smooth"
          layout="desktop"
        />
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about."
          linkText="Learn More"
          variant="error"
          style="smooth"
          layout="desktop"
        />
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about."
          linkText="Learn More"
          variant="warning"
          style="smooth"
          layout="desktop"
        />
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about."
          linkText="Learn More"
          variant="success"
          style="smooth"
          layout="desktop"
        />
      </div>
    </section>

    <section className="section">
      <h2>Alert — Mobile</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about. Describe what has happened and what changed for the user."
          linkText="Learn More"
          variant="info"
          style="smooth"
          layout="mobile"
        />
        <Alert
          title="Alert headline text"
          description="Here is some supporting text for the user to better understand what the alert is all about."
          linkText="Learn More"
          variant="error"
          style="smooth"
          layout="mobile"
        />
      </div>
    </section>

    <section className="section">
      <h2>Alert — For Shop (уведомления)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Alert
          title="Товар добавлен в корзину"
          description="Nike Air Max успешно добавлен в вашу корзину."
          linkText="Перейти к оформлению"
          variant="success"
          style="smooth"
          layout="desktop"
          onClose={() => console.log('Closed')}
        />
        <Alert
          title="Ошибка оформления"
          description="Не удалось оформить заказ. Пожалуйста, проверьте данные карты."
          linkText="Попробовать снова"
          variant="error"
          style="smooth"
          layout="desktop"
        />
        <Alert
          title="Скидка скоро закончится"
          description="У вас есть товары в корзине со скидкой. Успейте оформить заказ!"
          linkText="Перейти в корзину"
          variant="warning"
          style="smooth"
          layout="desktop"
        />
      </div>
    </section>

    {/* ============ TOGGLE ============ */}
    <section className="section">
      <h2>Toggle — Sizes</h2>
      <div className="checkbox-grid">
        <Toggle label="Small" size="sm" />
        <Toggle label="Medium" size="md" />
        <Toggle label="Large" size="lg" />
      </div>
    </section>

    <section className="section">
      <h2>Toggle — Checked States</h2>
      <div className="checkbox-grid">
        <Toggle label="Unchecked Small" size="sm" />
        <Toggle label="Checked Small" size="sm" checked />
        <Toggle label="Unchecked Medium" size="md" />
        <Toggle label="Checked Medium" size="md" checked />
        <Toggle label="Unchecked Large" size="lg" />
        <Toggle label="Checked Large" size="lg" checked />
      </div>
    </section>

    <section className="section">
      <h2>Toggle — Disabled</h2>
      <div className="checkbox-grid">
        <Toggle label="Disabled Off" disabled />
        <Toggle label="Disabled On" checked disabled />
      </div>
    </section>

    <section className="section">
      <h2>Toggle — For Shop (настройки)</h2>
      <div className="checkbox-grid">
        <Toggle label="Уведомления о скидках" checked />
        <Toggle label="Email рассылка" />
        <Toggle label="SMS уведомления" checked />
        <Toggle label="Тёмная тема" />
      </div>
    </section>

    {/* ============ RADIO BUTTON ============ */}
    <section className="section">
      <h2>Radio Button — Sizes</h2>
      <div className="checkbox-grid">
        <RadioButton label="Small" name="size_demo" value="sm" size="sm" />
        <RadioButton label="Medium" name="size_demo" value="md" size="md" />
        <RadioButton label="Large" name="size_demo" value="lg" size="lg" />
      </div>
    </section>

    <section className="section">
      <h2>Radio Button — Checked States</h2>
      <div className="checkbox-grid">
        <RadioButton label="Unchecked Small" name="state_demo" value="us" size="sm" />
        <RadioButton label="Checked Small" name="state_demo" value="cs" size="sm" checked />
        <RadioButton label="Unchecked Medium" name="state_demo2" value="um" size="md" />
        <RadioButton label="Checked Medium" name="state_demo2" value="cm" size="md" checked />
        <RadioButton label="Unchecked Large" name="state_demo3" value="ul" size="lg" />
        <RadioButton label="Checked Large" name="state_demo3" value="cl" size="lg" checked />
      </div>
    </section>

    <section className="section">
      <h2>Radio Button — Disabled</h2>
      <div className="checkbox-grid">
        <RadioButton label="Disabled Unchecked" name="disabled_demo" value="du" disabled />
        <RadioButton label="Disabled Checked" name="disabled_demo2" value="dc" checked disabled />
      </div>
    </section>

    <section className="section">
      <h2>Radio Button — For Shop (выбор размера)</h2>
      <div className="checkbox-grid">
        <RadioButton label="XS" name="product_size" value="xs" />
        <RadioButton label="S" name="product_size" value="s" />
        <RadioButton label="M" name="product_size" value="m" checked />
        <RadioButton label="L" name="product_size" value="l" />
        <RadioButton label="XL" name="product_size" value="xl" />
        <RadioButton label="XXL" name="product_size" value="xxl" disabled />
      </div>
    </section>

    <section className="section">
      <h2>Radio Button — For Shop (способ доставки)</h2>
      <div className="checkbox-grid">
        <RadioButton label="Курьер" name="delivery" value="courier" checked />
        <RadioButton label="Самовывоз" name="delivery" value="pickup" />
        <RadioButton label="Почта" name="delivery" value="post" />
        <RadioButton label="Экспресс" name="delivery" value="express" />
      </div>
    </section>
    </div>
  )
}

export const App = AppComponent
